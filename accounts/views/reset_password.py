from rest_framework.generics import GenericAPIView, UpdateAPIView
from django.contrib.auth.models import User
from ..serializers.reset_password import ResetPasswordMailSerializer, ResetPasswordSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from django.middleware.csrf import get_token
from ..tokens.jwt_token import MailActivation
from .email import Mail
from .store_token import store_token
from rest_framework.permissions import AllowAny


class ResetPasswordMail(GenericAPIView):
    serializer_class = ResetPasswordMailSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        check = ResetPasswordMailSerializer(data=self.request.data)
        if(check.is_valid()):
            user = User.objects.get(email=check.data['email'])
            token = MailActivation().for_user(user)
            store_token(token)
            body = Mail(request, user, '/reset-password/' +
                        str(token)).send(user.email, subject="Reset Password", message="")
            print(body)
            return Response({"success": "Email has been sent!. check your Mail Box", "activate": body})
        return Response(check.errors, status=HTTP_400_BAD_REQUEST)


class ResetPassword(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = ResetPasswordSerializer
    permission_classes = (AllowAny,)

    def update(self, request, *args, **kwargs):
        print(self.request.data)
        instance = self.get_object()
        serializer = ResetPasswordSerializer(instance, data=self.request.data)

        if(serializer.is_valid()):
            serializer.update(instance, self.request.data)
            return Response({"success": "Successfully Reseted!. You can logging Now!"})

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
