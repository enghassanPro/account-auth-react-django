from uuid import uuid4
from rest_framework_simplejwt.exceptions import TokenBackendError
from rest_framework_simplejwt.settings import api_settings
from django.utils.translation import ugettext_lazy as _
from rest_framework_simplejwt.utils import (
    aware_utcnow, datetime_from_epoch, datetime_to_epoch, format_lazy,
)
from datetime import timedelta
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken


class BaseToken:
    """
    This Class are Taking from rest-framework-simple-jwt and here I will edit it
    to match with my requirements.

    A class which validates and wraps an existing JWT or can be used to build a
    new JWT.
    """
    token_type = None
    lifetime = None
    errors = AuthenticationFailed

    def __init__(self, token=None, verify=True):
        """
        !!!! IMPORTANT !!!! MUST raise a TokenError with a user-facing error
        message if the given token is invalid, expired, or otherwise not safe
        to use.
        """
        if self.token_type is None or self.lifetime is None:
            raise self.errors(
                _('Cannot create token with no type or lifetime'))

        self.token = token
        self.current_time = aware_utcnow()

        # Set up token
        if token is not None:
            # An encoded token was provided
            from rest_framework_simplejwt.state import token_backend

            # Decode token
            try:
                self.payload = token_backend.decode(token, verify=verify)
            except TokenBackendError:
                raise self.errors(_('Token is invalid or expired'))

            if verify:
                self.verify()
        else:
            # New token.  Skip all the verification steps.
            self.payload = {api_settings.TOKEN_TYPE_CLAIM: self.token_type}

            # Set "exp" claim with default value
            self.set_exp(from_time=self.current_time, lifetime=self.lifetime)

            # Set "jti" claim
            self.set_jti()

    def __repr__(self):
        return repr(self.payload)

    def __getitem__(self, key):
        return self.payload[key]

    def __setitem__(self, key, value):
        self.payload[key] = value

    def __delitem__(self, key):
        del self.payload[key]

    def __contains__(self, key):
        return key in self.payload

    def get(self, key, default=None):
        return self.payload.get(key, default)

    def __str__(self):
        """
        Signs and returns a token as a base64 encoded string.
        """
        from rest_framework_simplejwt.state import token_backend

        return token_backend.encode(self.payload)

    def verify(self):
        """
        Performs additional validation steps which were not performed when this
        token was decoded.  This method is part of the "public" API to indicate
        the intention that it may be overridden in subclasses.
        """
        # According to RFC 7519, the "exp" claim is OPTIONAL
        # (https://tools.ietf.org/html/rfc7519#section-4.1.4).  As a more
        # correct behavior for authorization tokens, we require an "exp"
        # claim.  We don't want any zombie tokens walking around.
        self.check_exp()

        # Ensure token id is present
        if api_settings.JTI_CLAIM not in self.payload:
            raise self.errors(_('Token has no id'))

        self.verify_token_type()

    def verify_token_type(self):
        """
        Ensures that the token type claim is present and has the correct value.
        """
        try:
            token_type = self.payload[api_settings.TOKEN_TYPE_CLAIM]
        except KeyError:
            raise self.errors(_('Token has no type'))

        if self.token_type != token_type:
            raise self.errors(_('Token has wrong type'))

    def set_jti(self):
        """
        Populates the configured jti claim of a token with a string where there
        is a negligible probability that the same string will be chosen at a
        later time.

        See here:
        https://tools.ietf.org/html/rfc7519#section-4.1.7
        """
        self.payload[api_settings.JTI_CLAIM] = uuid4().hex

    def set_exp(self, claim='exp', from_time=None, lifetime=None):
        """
        Updates the expiration time of a token.
        """
        if from_time is None:
            from_time = self.current_time

        if lifetime is None:
            lifetime = self.lifetime

        self.payload[claim] = datetime_to_epoch(from_time + lifetime)

    def check_exp(self, claim='exp', current_time=None):
        """
        Checks whether a timestamp value in the given claim has passed (since
        the given datetime value in `current_time`).  Raises a TokenError with
        a user-facing error message if so.
        """
        if current_time is None:
            current_time = self.current_time

        try:
            claim_value = self.payload[claim]
        except KeyError:
            raise self.errors(format_lazy(_("Token has no '{}' claim"), claim))

        claim_time = datetime_from_epoch(claim_value)
        if claim_time <= current_time:
            raise self.errors(format_lazy(
                _("Token '{}' claim has expired"), claim))

    def get_errors(self):
        """
            Returns an error that's happened
        """
        return self.errors.get_codes()

    @classmethod
    def for_user(cls, user):
        """
        Returns an authorization token for the given user that will be provided
        after authenticating the user's credentials.
        """
        user_id = getattr(user, api_settings.USER_ID_FIELD)
        if not isinstance(user_id, int):
            user_id = str(user_id)

        token = cls()
        token[api_settings.USER_ID_CLAIM] = user_id

        return token


class BlacklistMixin:
    """
    If the `rest_framework_simplejwt.token_blacklist` app was configured to be
    used, tokens created from `BlacklistMixin` subclasses will insert
    themselves into an outstanding token list and also check for their
    membership in a token blacklist.
    """
    errors = AuthenticationFailed
    if 'rest_framework_simplejwt.token_blacklist' in settings.INSTALLED_APPS:
        def verify(self, *args, **kwargs):
            self.check_blacklist()

            super().verify(*args, **kwargs)

        def check_blacklist(self):
            """
            Checks if this token is present in the token blacklist.  Raises
            if so.
            """
            jti = self.payload[api_settings.JTI_CLAIM]

            if BlacklistedToken.objects.filter(token__jti=jti).exists():
                # raise self.errors(_('Token Invalid'))
                return True

        def delete_from_blacklsit(self, token):

            BlacklistedToken.objects.filter(token=token).delete()

        def blacklist(self):
            """
            Ensures this token is included in the outstanding token list and
            adds it to the blacklist.
            """
            jti = self.payload[api_settings.JTI_CLAIM]
            exp = self.payload['exp']

            # Ensure outstanding token exists with given jti
            token, _ = OutstandingToken.objects.get_or_create(
                jti=jti,
                defaults={
                    'token': str(self),
                    'expires_at': datetime_from_epoch(exp),
                },
            )

            return BlacklistedToken.objects.get_or_create(token=token)

        @classmethod
        def for_user(cls, user):
            """
            Adds this token to the outstanding token list.
            """
            token = super().for_user(user)

            jti = token[api_settings.JTI_CLAIM]
            exp = token['exp']

            OutstandingToken.objects.create(
                user=user,
                jti=jti,
                token=str(token),
                created_at=token.current_time,
                expires_at=datetime_from_epoch(exp),
            )

            return token


class MailActivation(BlacklistMixin, BaseToken):
    token_type = None
    lifetime = None

    def __init__(self, token_type='access', lifetime=10, token=None, verify=True):
        self.token_type = token_type
        self.lifetime = timedelta(minutes=lifetime)
        super().__init__(token=token, verify=verify)
