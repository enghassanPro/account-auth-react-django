from ..tokens.jwt_token import MailActivation
from rest_framework.generics import GenericAPIView
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from ..tokens.jwt_token import MailActivation
from .store_token import delete_token, store_token
from django.contrib.auth.models import User
from .email import Mail
from rest_framework.permissions import AllowAny


class VerifyToken(GenericAPIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        token = self.request.data['token']
        verify = MailActivation(token=token)
        user_id = verify.__getitem__('user_id')

        if(verify.verify() is None):

            if(delete_token(token)):
                user = User.objects.get(id=user_id)
                if not user.is_active:
                    user.is_active = True
                    user.save()
                return Response({"id": user_id})
            return Response({"error": "This Token Is Expired"}, status=HTTP_400_BAD_REQUEST)


class Activation(GenericAPIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        token = MailActivation()
        user = User.objects.get(username=self.request.data['username'])
        make = token.for_user(user)
        store_token(make)
        body = Mail(request, user, '/activate/' +
                    str(make)).send(user.email, subject="Activate Account", message="")
        return Response({"success": "Activation Email has been sent!. check your Mail Box to activate your Account", "activate": body})
