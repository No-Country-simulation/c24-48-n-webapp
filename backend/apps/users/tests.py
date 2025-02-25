from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from faker import Faker

class UserRegisterTests(TestCase):
    """
    Test case para el endpoint de registro de usuarios.
    """
    def setUp(self):
        """
        Configuración inicial de los casos de prueba.
        """
        self.client = APIClient()
        self.url = reverse('register_user_api')  # Asegúrate de tener un nombre de URL definido en tu archivo urls.py
        self.faker = Faker()

    def test_register_user_success(self):
        """
        Prueba de registro de usuario exitoso.

        Verifica que el endpoint responda con un código de estado
        201 cuando se registra correctamente un nuevo usuario.
        """
        data = {
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'email': 'testuser@example.com',
            'password': 'testpassword'
        }
        
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('token', response.data['data'])
        self.assertIn('user', response.data['data'])
        self.assertEqual(response.data['data']['user']['username'], 'testuser')

    def test_register_user_existing_email(self):
        """
        Prueba de registro de usuario con email existente.

        Verifica que el endpoint responda con un código de estado
        400 cuando se intenta registrar un usuario con un email que ya existe.
        """
        User.objects.create_user(username='existinguser', email='testuser@example.com', password='password')
        data = {
            'username': 'testuser2',
            'first_name': 'Test',
            'last_name': 'User',
            'email': 'testuser@example.com',
            'password': 'testpassword2'
        }
        
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data['message'])

    def test_register_user_missing_fields(self):
        """
        Prueba de registro de usuario con campos faltantes.

        Verifica que el endpoint responda con un código de estado
        400 cuando se intenta registrar un usuario con campos faltantes.
        """
        data = {
            'username': '',
            'first_name': 'Test',
            'last_name': 'User',
            'email': '',
            'password': 'testpassword'
        }
        
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('username', response.data['message'])
        self.assertIn('email', response.data['message'])

    def test_register_user_existing_username(self):
        """
        Prueba de registro de usuario con nombre de usuario existente.

        Verifica que el endpoint responda con un código de estado
        400 cuando se intenta registrar un usuario con un nombre de usuario que ya existe.
        """
        User.objects.create_user(username='testuser', email='existinguser@example.com', password='password')
        data = {
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'email': 'newuser@example.com',
            'password': 'testpassword'
        }
        
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('username', response.data['message'])

    def test_register_user_missing_password(self):
        """
        Prueba de registro de usuario sin contraseña.

        Verifica que el endpoint responda con un código de estado
        400 cuando se intenta registrar un usuario sin contraseña.
        """
        data = {
            'username': 'testuser',
            'first_name': 'Test',
            'last_name': 'User',
            'email': 'testuser@example.com',
            'password': ''
        }
        
        response = self.client.post(self.url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data['message'])

