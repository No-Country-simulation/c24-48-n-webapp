from rest_framework import serializers
from .models import Pets, PhotosPets


class PhotosPetsResponseSerializer(serializers.ModelSerializer):
    """
    Serializador para la respuesta de los datos de fotos de las mascotas.
    """
    class Meta:
        """
        Metadatos del serializador.

        Attributes:
            model (PhotosPets): Modelo de las fotos de la mascotas.
            fields (list): Campos del serializador.
        """
        model = PhotosPets
        fields = '__all__'


class PetsResponseSerializer(serializers.ModelSerializer):
    """
    Serializador para la respuesta de los datos de las mascotas.
    """
    photos = PhotosPetsResponseSerializer(many=True, read_only=True, source='photospets_set')

    class Meta:
        """
        Metadatos del serializador.

        Attributes:
            model (Pets): Modelo de las mascotas.
            fields (list): Campos del serializador.
        """
        model = Pets
        fields = [
            'id',
            'name',
            'age',
            'size',
            'breed',
            'health_status',
            'photo_cover',
            'status',
            'create_at',
            'update_at',
            'photos'
        ]

class PhotosPetSerializer(serializers.ModelSerializer):
    """
    Serializador para la respuesta de los datos de fotos de las mascotas.
    """
    # Relaciona cada foto con una mascota existente mediante su ID.
    pet_id = serializers.PrimaryKeyRelatedField(queryset=Pets.objects.all(), source='pet')
    
    class Meta:
        """
        Metadatos del serializador.

        Attributes:
            model (PhotosPets): Modelo de las fotos de la mascotas.
            fields (list): Campos del serializador.
        """
        model = PhotosPets
        fields = ['photo', 'pet_id']


class PetsUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pets
        fields = [
            'id',
            'name',
            'age',
            'size',
            'breed',
            'health_status',
            'photo_cover',
            'status',
        ]

    name = serializers.CharField(required=False)
    age = serializers.IntegerField(required=False)
    size = serializers.CharField(required=False)
    breed = serializers.CharField(required=False)
    health_status = serializers.CharField(required=False)
    photo_cover = serializers.ImageField(required=False)
    status = serializers.CharField(required=False)

