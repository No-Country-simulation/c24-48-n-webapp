from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase
from django.urls import reverse
from apps.pets.models import Pets
from faker import Faker


class PetsFilterTests(TestCase):
    """
    Test case para el endpoint de filtrado de mascotas.
    """
    def setUp(self):
        """
        Configuración inicial de los casos de prueba.
        """
        self.client = APIClient()
        self.url = reverse('pets_filter')
        self.faker = Faker()
        Pets.objects.create(
            name=self.faker.name(),
            age=3,
            size="small",
            breed="Beagle",
            health_status="Healthy",
            photo_cover=self.faker.image_url(),
            status="available"
        )
        Pets.objects.create(
            name=self.faker.name(),
            age=5,
            size="medium",
            breed="Labrador",
            health_status="Injured",
            photo_cover=self.faker.image_url(),
            status="adopted"
        )
        Pets.objects.create(
            name=self.faker.name(),
            age=2,
            size="large",
            breed="German Shepherd",
            health_status="Healthy",
            photo_cover=self.faker.image_url(),
            status="available"
        )


    def test_filter_pets_by_age(self):
        """
        Prueba de filtrado de mascotas por edad.

        Verifica que el endpoint responda con un código de estado
        200 cuando se filtran correctamente las mascotas por edad.
        """
        response = self.client.get(self.url, {'age': 3}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertTrue('data' in response.data)
        self.assertEqual(len(response.data['data']['pets']), 1)


    def test_filter_pets_by_size(self):
        """
        Prueba de filtrado de mascotas por tamaño.

        Verifica que el endpoint responda con un código de estado
        200 cuando se filtran correctamente las mascotas por tamaño.
        """
        response = self.client.get(self.url, {'size': 'medium'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertTrue('data' in response.data)
        self.assertEqual(len(response.data['data']['pets']), 1)
        self.assertEqual(response.data['data']['pets'][0]['size'], 'medium')


    def test_filter_pets_by_breed(self):
        """
        Prueba de filtrado de mascotas por raza.

        Verifica que el endpoint responda con un código de estado
        200 cuando se filtran correctamente las mascotas por raza.
        """
        response = self.client.get(self.url, {'breed': 'German Shepherd'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertTrue('data' in response.data)
        self.assertEqual(len(response.data['data']['pets']), 1)
        self.assertEqual(response.data['data']['pets'][0]['breed'], 'German Shepherd')


    def test_filter_pets_no_results(self):
        """
        Prueba de filtrado de mascotas sin resultados.

        Verifica que el endpoint responda con un código de estado
        404 cuando se filtran las mascotas y no se obtienen resultados.
        """
        response = self.client.get(self.url, {'age': 10}, format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertTrue('status' in response.data)
        self.assertTrue('message' in response.data)
        self.assertEqual(response.data['message'], 'No pets found with the specified filters.')
