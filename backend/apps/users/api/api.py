from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializer import UserSerializer
from  rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import authentication_classes, permission_classes


@api_view(['POST'])
def user_register(request):

    context = {'validate_email': request.data.get('validate_email', True)}
    user_serializer = UserSerializer(data=request.data, context= context) #validacion
    if user_serializer.is_valid():
        user_serializer.save()
        
        user = User.objects.get(id=user_serializer.data['id'])
        user.set_password(user_serializer.data['password'])
        user.save()

        token = Token.objects.create(user=user)
        user_serializer =UserSerializer(user)
        return Response({'token': token.key, 'user': user_serializer.data}, status=status.HTTP_201_CREATED)
    else:
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','GET'])
def user_update(request, pk=None):

    user = User.objects.filter(id = pk).first()  

    if user:
        
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data)
        
        elif request.method == 'PUT':    
            user_serializer = UserSerializer(user, data=request.data, context={'validate_email': False}) #Sin validacion de email repeat
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data, status=status.HTTP_200_OK)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'User does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE','GET'])
def user_update(request, pk=None):

    user = User.objects.filter(id = pk).first()  

    if user:
        
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data)
        
        elif request.method == 'DELETE':    
            user.delete()
            return Response({'message': 'User has been deleted.'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'User does not exist.'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    
    user = get_object_or_404(User, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({'error': 'invalid password.'}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    user_serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': user_serializer.data}, status=status.HTTP_202_ACCEPTED)



@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_perfil(request):
    user_serializer = UserSerializer(request.user)
    return Response({'message': 'Login ok', 'user': user_serializer.data}, status=status.HTTP_202_ACCEPTED)