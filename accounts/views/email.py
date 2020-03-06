from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from smtplib import SMTPException
from rest_framework.exceptions import APIException
from django.utils.translation import ugettext_lazy as _


class Mail():

    def __init__(self, request, user, link):
        self._request = request
        self._user = user
        self._template_name = 'accounts/body_mail.html'
        self._link = link
        self._errors = APIException

    def _get_domain(self):
        return get_current_site(self._request).domain

    def _get_body_string(self, subject, message):
        return render_to_string(self._template_name, {
            "user": self._user,
            "message": message,
            "subject": subject,
            "domain": self._get_domain(),
            "link": self._link
        })

    def send(self, to, from_email=None, subject="Activate Your Account", message=''):

        if isinstance(to, str):
            to = [to]

        # self._get_body_string(subject, message)
        domain = self._get_domain()
        if domain in ['localhost:8000', '127.0.0.1:8000']:
            return "http://" + domain + self._link
        else:
            return "https://"+domain+self._link

        mail = EmailMessage(
            subject=subject,
            body=self._get_body_string(subject, message),
            from_email=from_email,
            to=to)
        try:
            mail.send()
            return True
        except SMTPException as e:
            raise self._errors(e)

    def get_errors(self):
        return self._errors.get_codes()
