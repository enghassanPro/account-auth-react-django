from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterSerializer(serializers.Serializer):

    password = serializers.CharField()
    password1 = serializers.CharField()
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()

    err_msg = {
        'password_mismatch': {'password': 'The two password fields didn’t match.'},
        'password_length': {'password': 'The password should be greater than 5 character'},
        'first_name_length': {'first_name': "first name should be greater than 4 character"},
        'last_name_length': {'last_name': "last name should be greater than 4 character"},

    }

    def validate(self, validated_data):
        password = validated_data.get('password')
        password1 = validated_data.get('password1')
        fname = validated_data.get('first_name')
        lname = validated_data.get('last_name')

        if password and password1 and password != password1:
            raise serializers.ValidationError(
                self.err_msg['password_mismatch'])
        if len(password) < 5:
            raise serializers.ValidationError(
                self.err_msg['password_length'])
        if len(fname) < 4:
            raise serializers.ValidationError(
                self.err_msg['first_name_length'])
        if len(lname) < 4:
            raise serializers.ValidationError(
                self.err_msg['last_name_length'])

        return validated_data
