from rest_framework.generics import GenericAPIView
from rest_framework.status import HTTP_400_BAD_REQUEST
from ..serializers.login import LoginSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from ..serializers.user import UserLoginSerializer
from rest_framework.permissions import AllowAny


class LoginAPIView(GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        user = self.get_serializer(data=request.data)
        if user.is_valid():
            return Response({"user": UserLoginSerializer(user.validated_data, context=self.get_serializer_context()).data})
        return Response(user.errors, status=HTTP_400_BAD_REQUEST)
