from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ['id','username', 'first_name', 'last_name', 'email', 'password', 'is_active']

    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)
        self.validate_email_flag = self.context.get('validate_email', True)
        

    def validate_email(self, value):
        if self.validate_email_flag:
            email = User.objects.filter(email=value)
            print(email)
            if len(email) != 0:
                raise serializers.ValidationError("Email already exists.")
        return value
        
