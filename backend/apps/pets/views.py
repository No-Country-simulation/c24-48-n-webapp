from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from apps.core.utils.custom_pagination import CustomPageNumberPagination
from .models import Pets
from .serializers import PetsResponseSerializer, PhotosPetsResponseSerializer, PhotosPetSerializer
from config.settings.base import REST_FRAMEWORK
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAdminOrStaff
from rest_framework.authentication import TokenAuthentication


# Endpoint para búsqueda de mascotas
@api_view(['GET'])
def pets_filter(request):
    # Obtiene los parámetros de filtro de la solicitud
    filters = {
        'age__icontains': request.query_params.get('age'),
        'size__icontains': request.query_params.get('size'),
        'breed__icontains': request.query_params.get('breed'),
        'health_status__icontains': request.query_params.get('health_status'),
        'status__icontains': request.query_params.get('status'),
    }

    # Elimina filtros con valores None
    filters = {key: value for key, value in filters.items() if value is not None}

    # Filtra las mascotas según los parámetros proporcionados
    pets = Pets.objects.filter(**filters).order_by('id')

    # Verifica si hay mascotas
    if not pets:
        # Respuesta de error si no se encontraron mascotas
        return Response({
            'status': 'error',
            'message': 'No pets found with the specified filters.'
        }, status=status.HTTP_404_NOT_FOUND)

    # Crea la paginación de los datos obtenidos
    paginator = CustomPageNumberPagination()
    paginated_queryset = paginator.paginate_queryset(pets, request)

    # Serializa los datos de las mascotas
    pets_response_serializer = PetsResponseSerializer(paginated_queryset, many=True)

    # Obtiene la respuesta con los datos paginados
    response_data = paginator.get_paginated_response(pets_response_serializer.data)

    # Respuesta exitosa al obtener las mascotas filtradas
    return Response({
        'status': 'success',
        'message': 'The pets were successfully obtained.',
        'data': {
            'page_info': {
                'count': response_data['count'],
                'page_size': int(request.query_params.get('page_size', REST_FRAMEWORK['PAGE_SIZE'])),
                'links': response_data['links']
            },
            'pets': response_data['results']
        }
    }, status=status.HTTP_200_OK)

# Endpoint para registro de mascotas
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAdminOrStaff])
def pet_register(request):
    
    # Serializa los datos enviados en la solicitud utilizando PetsResponseSerializer
    pet_serializer = PetsResponseSerializer(data=request.data)
    
    # Verifica si los datos no son válidos
    if not pet_serializer.is_valid():
        # Respuesta de error si la validación falla
        return Response({
            'status': 'error', 
            'message': pet_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # Guarda los datos si la validación es exitosa
    pet_serializer.save()
    
    # Respuesta exitosa al registrar la mascota
    return Response({
        'status': 'success', 
        'message': 'Pet registered successfully.', 
        'data': {
            'Pet': pet_serializer.data
        }
    }, status=status.HTTP_201_CREATED)


# Endpoint para actualizar mascota    
@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAdminOrStaff])
def pet_update(request):
    # Obtiene el valor de la clave primaria (pk) desde los datos de la solicitud
    pk = request.data.get('pk')
    
    # Verifica si no se proporcionó la clave primaria en la solicitud
    if not pk:
        return Response({
            'status': 'error',
            'message': 'No pk provided in the request.'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Inicializa el serializador con los datos de la solicitud
    pet_serializer = PetsResponseSerializer(data=request.data) 
    
    # Verifica si los datos no son válidos
    if not pet_serializer.is_valid():
        # Respuesta de error si la validación falla
        return Response({
            'status': 'error',
            'message': pet_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST) 
    
    # Guarda los datos si la validación es exitosa
    pet_serializer.save()       
    
    # Respuesta exitosa al actualizar la mascota
    return Response({
        'status': 'success',
        'message': 'Pet updated successfully.',
        'data': {
            'Pet': pet_serializer.data
        }
    }, status=status.HTTP_200_OK)


# Endpoint para carga de fotos de mascota  
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAdminOrStaff])
def pet_upload_photos(request):
    
    # Obtiene el valor de la clave primaria (pk) desde los datos de la solicitud
    pk = request.data.get('pk')
    
    # Verifica si no se proporcionó la clave primaria en la solicitud
    if not pk:
        return Response({
            'status': 'error',
            'message': 'No pk provided in the request.'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Serializa los datos enviados en la solicitud utilizando PhotosPetsResponseSerializer
    pet_photos_serializer = PhotosPetSerializer(data=request.data)
    
    # Verifica si los datos no son válidos
    if not pet_photos_serializer.is_valid():
        # Respuesta de error si la validación falla
        return Response({
            'status': 'error', 
            'message': pet_photos_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Guarda los datos si la validación es exitosa
        pet_photos_serializer.save()
    except:
        return Response({
            'status': 'error', 
            'message': 'An error occurred while saving the photo.'
        }, status=status.HTTP_400_BAD_REQUEST)        

    # Respuesta exitosa al registrar la mascota con las fotos
    return Response({
        'status': 'success', 
        'message': 'Photo pet updated successfully.', 
        'data': {
            'Pet': pet_photos_serializer.data
        }
    }, status=status.HTTP_201_CREATED)


# Endpoint para borrado de mascota  
@api_view(['DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAdminOrStaff])
def pet_delete(request):
    
    # Obtiene el valor de la clave primaria (pk) desde los datos de la solicitud
    pk = request.data.get('pk')
    
    # Verifica si no se proporcionó la clave primaria en la solicitud
    if not pk:
        return Response({
            'status': 'error',
            'message': 'No pk provided in the request.'
        }, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Intenta obtener la mascota con la clave primaria proporcionada
        pet = Pets.objects.get(pk=pk)
    
    except Pets.DoesNotExist:
        # Respuesta de error si la mascota no existe
        return Response({
            'status': 'error',
            'message': 'Pet does not exist.'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Elimina la mascota
    pet.delete()
    
    # Respuesta exitosa al eliminar la mascota
    return Response({
        'status': 'success',
        'message': 'Pet has been deleted.'
    }, status=status.HTTP_204_NO_CONTENT)

    
# Endpoint para visualizacion de mascotas disponibles  
@api_view(['GET'])
def pets_get_available(request):
    
    # Obtiene las mascotas available
    pets = Pets.objects.filter(status = 'available')
    
    # Verifica si hay mascotas available
    if not pets:
        # Respuesta de error si no se encontraron mascotas
        return Response({
            'status': 'error',
            'message': 'No pets available found.'
        }, status=status.HTTP_404_NOT_FOUND)
    
    # Crea la paginación de los datos obtenidos
    paginator = CustomPageNumberPagination()
    paginated_queryset = paginator.paginate_queryset(pets, request)

    # Serializa los datos de las mascotas
    pets_response_serializer = PetsResponseSerializer(paginated_queryset, many=True)

    # Obtiene la respuesta con los datos paginados
    response_data = paginator.get_paginated_response(pets_response_serializer.data)

    # Respuesta exitosa al obtener las mascotas availables
    return Response({
        'status': 'success',
        'message': 'The pets available were successfully obtained.',
        'data': {
            'page_info': {
                'count': response_data['count'],
                'page_size': int(request.query_params.get('page_size', REST_FRAMEWORK['PAGE_SIZE'])),
                'links': response_data['links']
            },
            'pets': response_data['results']
        }
    }, status=status.HTTP_200_OK)


