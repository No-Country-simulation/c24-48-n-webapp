from rest_framework import serializers
from django.utils import timezone
from .models import Appointment


class AppointmentValidationSerializer(serializers.ModelSerializer):
    """
    Serializador para la validación de los datos de las citas.
    """
    class Meta:
        """
        Metadatos del serializador.

        Attributes:
            model (Appointment): Modelo de las citas.
            fields (list): Campos del serializador.
        """
        model = Appointment
        fields = '__all__'

    
    def validate_datetime(self, datetime):
        """
        Funcion para validar que la fecha de la cita no
        sea una fecha pasada.

        Args:
            self (AppointmentValidationSerializer): Instancia del serializador.
            datetime (datetime): Fecha y hora de la cita a validar.
        
        Returns:
            datetime (datetime): La misma fecha y hora si es válida.
        
        Raises:
            serializers.ValidationError: Si la fecha y hora es una fecha pasada.
        """
        if datetime < timezone.now():
            raise serializers.ValidationError('The datetime cannot be a date in the past.')
        return datetime
