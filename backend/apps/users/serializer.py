from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    '''
    Serializador para el modelo User.

    Esta clase se utiliza para serializar y validar los datos de los usuarios, 
    incluyendo la validación opcional del correo electrónico.

    Attributes:
        validate_email_flag (bool): Bandera para determinar si se debe validar el correo electrónico.

    Methods:
        validate_email(value): Valida que el correo electrónico no exista ya en la base de datos.
    '''
    
    class Meta():
        model = User
        fields = ['id','username', 'first_name', 'last_name', 'email', 'password', 'is_active']
        

    def __init__(self, *args, **kwargs):
        '''
        Inicializa una instancia del serializador UserSerializer.

        Parameters:
            *args: Argumentos posicionales.
            **kwargs: Argumentos de palabras clave.

        Attributes:
            validate_email_flag (bool): Bandera para determinar si se debe validar el correo electrónico.
        '''
        
        super(UserSerializer, self).__init__(*args, **kwargs)
        self.validate_email_flag = self.context.get('validate_email', True)
        self.validate_password_flag = self.context.get('validate_password', True)
        
    def validate_email(self, value):
        '''
        Valida que el correo electrónico no exista ya en la base de datos.

        Parameters:
            value (str): El valor del correo electrónico a validar.

        Attributes:
            validate_email_flag (bool): Bandera para determinar si se debe validar el correo electrónico.
            email (QuerySet): Conjunto de consultas para verificar si el correo electrónico ya existe.

        Raises:
            serializers.ValidationError: Si el correo electrónico ya existe.

        Returns:
            str: El valor del correo electrónico validado.
        '''
        
        if self.validate_email_flag:
            email = User.objects.filter(email=value)
            print(email)
            if len(email) != 0:
                raise serializers.ValidationError("Email already exists.")
        return value
        
        
class UserUpdateSerializer(serializers.ModelSerializer):
    '''
    Serializer para actualizar la información del usuario.

    Atributos:
        model (User): El modelo de usuario asociado a este serializer.
        fields (list): Campos que serán incluidos en la serialización: 'id', 'username', 
                       'first_name', 'last_name', 'email', 'is_active'.

    Métodos:
        validate_email(value):
            Valida que el email proporcionado no exista ya en el sistema.
            Si el email ya existe, levanta una ValidationError.
    '''
    class Meta():
        model = User
        fields = ['id','username', 'first_name', 'last_name', 'email', 'is_active']


    def validate_email(self, value):
        email = User.objects.filter(email=value)
        if len(email) != 0:
            raise serializers.ValidationError("Email already exists.")
        return value

