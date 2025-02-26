from .models import Pet, PhotosPet
from .serializer import PetSerializer
from  rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import authentication_classes, permission_classes
from django.contrib.sessions.models import Session
from datetime import datetime

@api_view(['POST'])
def pet_register(request):
    
    pet_serializer = PetSerializer(data=request.data) 
    
    #Validacion
    if pet_serializer.is_valid():
        pet_serializer.save()
        
        '''#Recupera pet
        pet = Pet.objects.get(id=pet_serializer.data['id'])
        
        #setea password para encriptacion
        pet.set_password(pet_serializer.data['password'])
        pet.save()
        
        
        pet_serializer =PetSerializer(pet)'''
        return Response({
            'status': 'success', 
            'message': 'pet registered successfully.', 
            'data': {
                'pet': pet_serializer.data
                    }
                }, status=status.HTTP_201_CREATED)
    
    else:
        error = pet_serializer.errors
        return Response({
            'status': 'error', 
            'message': pet_serializer.errors 
            }, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
def pet_update(request, pk=None):

    return Response({
    'status': 'success', 
    'message': 'entro en update'
        })

    
@api_view(['DELETE'])
def pet_delete(request, pk=None):
    
    return Response({
    'status': 'success', 
    'message': 'entro en delete'
        })

    

