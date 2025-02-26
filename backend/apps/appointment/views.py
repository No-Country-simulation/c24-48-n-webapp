from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from apps.core.utils.serializer_validation import validate_serializer
from .serializers import AppointmentValidationSerializer


# Endpoint para agendar citas
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def schedule_appointment(request):
    # Obtiene los datos enviados en la petición
    appointment_validation_serializer = AppointmentValidationSerializer(data=request.data)

    # Obtiene la validación del serializer
    validation_error = validate_serializer(appointment_validation_serializer)
    
    # Verifica la validación del serializer
    if validation_error:
        # Respuesta de error en la validación del serializer
        return validation_error
    
    # Guarda la cita en la base de datos
    appointment_validation_serializer.save()
    
    # Respuesta exitosa al agendar la cita
    return Response({
        'status': 'success',
        'message': 'Appointment successfully scheduled.'
    }, status=status.HTTP_201_CREATED)
