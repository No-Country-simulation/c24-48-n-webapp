from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from apps.core.utils.custom_pagination import CustomPageNumberPagination
from .models import Pets
from .serializers import PetsResponseSerializer
from config.settings.base import REST_FRAMEWORK


# Endpoint para búsqueda de mascotas
@api_view(['GET'])
def filter(request):
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
