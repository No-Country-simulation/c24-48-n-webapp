from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from apps.appointment.models import Appointment
from apps.pets.models import Pets
from faker import Faker


class AcceptRejectAppointmentsTests(TestCase):
    """
    Test case para el endpoint de aceptar o rechazar citas.
    """
    def setUp(self):
        """
        Configuración inicial de los casos de prueba.
        """
        self.client = APIClient()
        self.faker = Faker()
        self.user = User.objects.create_user(
            username=self.faker.user_name(),
            email=self.faker.email(),
            password='password123'
        )
        self.pet = Pets.objects.create(
            name=self.faker.name(),
            age=3,
            size="small",
            breed="Beagle",
            health_status="Healthy",
            photo_cover=self.faker.image_url(),
            status="available"
        )
        self.appointment = Appointment.objects.create(
            user=self.user,
            pet=self.pet,
            datetime=self.faker.future_datetime(end_date='+30d'),
            status='PENDING'
        )
        self.url = reverse('accept_reject_appointment', args=[self.appointment.id])
        self.client.force_authenticate(user=self.user)


    def test_accept_appointment(self):
        """
        Prueba de aceptar una cita.

        Verifica que el endpoint responda con un código de estado
        200 cuando se acepta correctamente la cita.
        """
        response = self.client.post(self.url, {'status': 'CONFIRMED'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['status'], 'success')
        self.assertEqual(response.data['message'], 'Appointment successfully confirmed.')


    def test_reject_appointment(self):
        """
        Prueba de rechazar una cita.

        Verifica que el endpoint responda con un código de estado
        200 cuando se rechaza correctamente la cita.
        """
        response = self.client.post(self.url, {'status': 'CANCELLED'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['status'], 'success')
        self.assertEqual(response.data['message'], 'Appointment successfully cancelled.')


    def test_invalid_status(self):
        """
        Prueba de enviar un estado inválido.

        Verifica que el endpoint responda con un código de estado
        400 cuando se envía un estado inválido.
        """
        response = self.client.post(self.url, {'status': 'INVALID'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['status'], 'error')
        self.assertEqual(response.data['message'], 'Invalid status. Use "CONFIRMED" or "CANCELLED".')


    def test_appointment_not_found(self):
        """
        Prueba de enviar un ID de cita no existente.

        Verifica que el endpoint responda con un código de estado
        404 cuando no se encuentra la cita.
        """
        url = reverse('accept_reject_appointment', args=[999])
        response = self.client.post(url, {'status': 'CONFIRMED'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['status'], 'error')
        self.assertEqual(response.data['message'], 'Appointment not found.')


    def test_accept_reject_appointment_without_token(self):
        """
        Prueba de aceptar o rechazar cita sin token de autenticación.

        Verifica que el endpoint responda con un código de estado
        401 cuando se intenta agendar una cita sin un
        token de autenticación.
        """
        self.client.credentials()
        response = self.client.post(self.url, {'status': 'CONFIRMED'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
