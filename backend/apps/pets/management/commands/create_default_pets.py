from django.core.management.base import BaseCommand
from apps.pets.models import Pets, PhotosPets
from faker import Faker


class Command(BaseCommand):
    help = 'Creating default data for pets.'

    def add_arguments(self, parser):
        """
        Agrega argumentos al comando.

        Args:
            parser (ArgumentParser): El parser de argumentos.

        Returns:
            None
        """
        parser.add_argument(
            '--count',
            type=int,
            default=10,
            help='Number of pets to create'
        )

    def handle(self, *args, **options):
        """
        Comando para crear datos por defectos de las mascotas.

        Args:
            *args (list): Lista de argumentos.
            **options (dict): Diccionario de opciones.
        
        Returns:
            None
        """
        count = options['count']
        fake = Faker()

        for _ in range(count):
            pet_data = {
                'name': fake.first_name(),
                'age': fake.random_int(min=1, max=15),
                'size': fake.random_element(elements=['small', 'medium', 'large']),
                'breed': fake.word(),
                'health_status': fake.word(),
                'photo_cover': fake.image_url(),
                'status': fake.random_element(elements=['available', 'adopted', 'pending']),
            }
            pet, created = Pets.objects.get_or_create(**pet_data)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Pet {pet.name} created successfully.'))

                # Crear fotos falsas para la mascota
                for _ in range(fake.random_int(min=1, max=5)):
                    photo_data = {
                        'photo': fake.image_url(),
                        'pet': pet
                    }
                    PhotosPets.objects.create(**photo_data)
                    self.stdout.write(self.style.SUCCESS(f'Photo for pet {pet.name} created successfully.'))
            else:
                self.stdout.write(self.style.WARNING(f'Pet {pet.name} already exists.'))
