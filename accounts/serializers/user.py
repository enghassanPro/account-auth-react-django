from rest_framework.serializers import ModelSerializer, ValidationError
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name',
                  'username', 'email', 'password']

    err_msg = {
        'email_msg': {'email': "A user with that email already exists"},
    }

    def create(self, data, *args, **kwargs):
        user = User(
            first_name=data['first_name'],
            last_name=data['last_name'],
            username=data['username'],
            email=data['email']
        )
        user.set_password(data['password'])
        user.is_active = False
        user.save()
        return user

    def validate(self, data):
        email = data.get('email')
        if User.objects.filter(email=email).exists():
            raise ValidationError(
                self.err_msg['email_msg'])

        return data


class UserLoginSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'is_active', 'first_name', 'last_name',
                  'username', 'email']
