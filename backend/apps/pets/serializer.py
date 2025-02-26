from rest_framework import serializers
from .models import Pet, PhotosPet


class PhotoPetResponseSerializer(serializers.ModelSerializer):
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
        model = PhotosPet
        fields = '__all__'


class PetSerializer(serializers.ModelSerializer):
    """
    Serializador para la respuesta de los datos de las mascotas.
    """
    photos = PhotoPetResponseSerializer(many=True, read_only=True, source='photospets_set')

    class Meta:
        """
        Metadatos del serializador.

        Attributes:
            model (Pets): Modelo de las mascotas.
            fields (list): Campos del serializador.
        """
        model = Pet
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
    
        def validate_photo_cover(self, value):
            '''photo_cover = Pet.objects.filter(photo_cover=value)
            if len(photo_cover) != 0:
                raise serializers.ValidationError("Email already exists.")'''
            return value