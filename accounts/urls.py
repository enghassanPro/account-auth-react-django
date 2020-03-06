from django.conf.urls import url, include
from django.urls import path
from .views.register import RegisterAPIView
from .views.login import LoginAPIView
from .views.reset_password import ResetPassword, ResetPasswordMail
from .views.verify import VerifyToken, Activation

app_name = "auth"

urlpatterns = [
    url(r'^register$', RegisterAPIView.as_view()),
    url(r'^login$', LoginAPIView.as_view()),
    url(r'^reset-password$', ResetPasswordMail.as_view()),
    url(r'^reset-password/(?P<pk>[0-9_]+)$', ResetPassword.as_view()),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
    url(r'^verify$', VerifyToken.as_view()),
    url(r'^send/activate$', Activation.as_view())
]
