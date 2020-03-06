from rest_framework.serializers import ModelSerializer, Serializer, ValidationError, CharField
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class LoginSerializer(Serializer):
    username = CharField()
    password = CharField()

    err_msg = {
        'login': {'login': 'This Account is\nt Activate'},
        'login_active': {'login': 'This User isn\'t active'},
        'user_not_found': {'user': "This User isn't found"},
        'incorrect_password': {'password': "Incorrect Password please try again!"},
    }

    def validate(self, data):
        check = User.objects.filter(username=data.get('username'))
        if(check.exists()):
            if check.get().is_active:
                user = authenticate(**data)
                print(user)
                if user:
                    if user.is_active:
                        return user
                else:
                    raise ValidationError(self.err_msg['incorrect_password'])
            raise ValidationError(self.err_msg['login_active'])
        raise ValidationError(self.err_msg['user_not_found'])
