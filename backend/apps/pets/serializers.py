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