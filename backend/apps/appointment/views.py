from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from apps.core.utils.serializer_validation import validate_serializer
from .serializers import AppointmentValidationSerializer
from .models import Appointment


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


# Endpoint para aceptar o rechazar citas
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def accept_reject_appointments(request, appointment_id):
    try:
        # Obtiene la cita por su ID
        appointment = Appointment.objects.get(id=appointment_id)
    except Appointment.DoesNotExist:
        # Respuesta de error al no encontrar la cita
        return Response({
            'status': 'error',
            'message': 'Appointment not found.'
        }, status=status.HTTP_404_NOT_FOUND)

    # Obtiene los datos enviados en la peticion
    status_action = request.data.get('status')

    # Verifica si el estado es el correcto
    if status_action not in ['CONFIRMED', 'CANCELLED']:

        # Respuesta de error al no tener el formato correcto
        return Response({
            'status': 'error',
            'message': 'Invalid status. Use "CONFIRMED" or "CANCELLED".'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Guarda el estado de la cita en la base de datos
    appointment.status = status_action
    appointment.save()

    # Respuesta exitosa al cambiar el estado de la cita
    return Response({
        'status': 'success',
        'message': f'Appointment successfully {status_action.lower()}.'
    }, status=status.HTTP_200_OK)
