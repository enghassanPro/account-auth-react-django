from rest_framework import serializers
from django.contrib.auth.models import User


class ResetPasswordMailSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email',)

    err_msg = {
        'email_not_found': {'email': 'This email doesn\'t exists you can Register Now!'}
    }

    def validate(self, data):
        email = data.get('email')
        if(not User.objects.filter(email=email).exists()):
            raise serializers.ValidationError(self.err_msg['email_not_found'])
        return data


class ResetPasswordSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField()

    class Meta:
        model = User
        fields = ['password', 'password1']

    err_msg = {
        'password_mismatch': {'password': 'The two password fields didn’t match.'},
        'password_length': {'password': 'The password should be greater than 5 character'},
    }

    def update(self, instance, data):
        instance.password = data.get('password', instance.password)
        instance.set_password(data.get('password'))
        instance.save()
        return instance

    def validate(self, data):

        password = data.get('password')
        password1 = data.get('password1')

        if password and password1 and password != password1:
            raise serializers.ValidationError(
                self.err_msg['password_mismatch'])
        if len(password) < 5:
            raise serializers.ValidationError(
                self.err_msg['password_length'])

        return data
