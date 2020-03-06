from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.status import HTTP_400_BAD_REQUEST
from ..serializers.register import RegisterSerializer
from ..serializers.user import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from ..tokens.jwt_token import MailActivation
from .store_token import store_token
from .email import Mail
from rest_framework.permissions import AllowAny


class RegisterAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):

        register = RegisterSerializer(data=self.request.data)
        if register.is_valid():
            user = UserSerializer(data=register.data)

            if user.is_valid():
                user.save()
                user = User.objects.get(username=user.data['username'])
                token = MailActivation().for_user(user)
                store_token(token)
                body = Mail(request, user, '/activate/' +
                            str(token)).send(user.email, subject="Activate Account", message="")
                return Response({"success": "Successfully Registered!. check your Mail Box to activate your Account", "activate": body})

            # (user.errors, status=HTTP_400_BAD_REQUEST),
            return Response(user.errors, status=HTTP_400_BAD_REQUEST)
        else:
            return Response(register.errors, status=HTTP_400_BAD_REQUEST)
