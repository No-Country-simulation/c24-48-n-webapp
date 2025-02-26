from rest_framework.test import APIClient
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from apps.pets.models import Pets
from faker import Faker


class ScheduleAppointmentTests(TestCase):
    """
    Test case para el endpoint de agendar citas.
    """
    def setUp(self):
        """
        Configuración inicial de los casos de prueba.
        """
        self.client = APIClient()
        self.url = reverse('schedule_appointment')
        self.faker = Faker()
        self.user = User.objects.create(
            username=self.faker.user_name(),
            email=self.faker.email(),
            first_name=self.faker.first_name(),
            last_name=self.faker.last_name(),
            password=self.faker.password()
        )
        self.token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        self.pet = Pets.objects.create(
            name=self.faker.name(),
            age=3,
            size="small",
            breed="Beagle",
            health_status="Healthy",
            photo_cover=self.faker.image_url(),
            status="available"
        )
        self.data = {
            'user': self.user.id,
            'pet': self.pet.id,
            'datetime': self.faker.future_datetime(end_date='+30d').isoformat(),
        }


    def test_schedule_appointment_with_valid_data(self):
        """
        Prueba de agendar cita con datos válidos.

        Verifica que el endpoint responda con un código de estado
        201 cuando se agenda correctamente la cita.
        """
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['status'], 'success')
        self.assertEqual(response.data['message'], 'Appointment successfully scheduled.')


    def test_schedule_appointment_with_invalid_data(self):
        """
        Prueba de agendar cita con datos inválidos.

        Verifica que el endpoint responda con un código de estado
        400 cuando los datos de la cita son inválidos.
        """
        del self.data['datetime']
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)


    def test_create_job_offer_without_token(self):
        """
        Prueba de creación de oferta de trabajo sin token de autenticación.

        Verifica que el endpoint responda con un código de estado
        401 cuando se intenta crear una oferta de trabajo sin un
        token de autenticación.
        """
        self.client.credentials()
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
