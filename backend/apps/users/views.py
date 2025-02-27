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
from django.contrib.sessions.models import Session
from datetime import datetime

@api_view(['POST'])
def user_register(request):
    '''
    Registra un nuevo usuario y crea un token de autenticación.

    Parameters:
        request (HttpRequest): Datos de registro del usuario.

    Attributes:
        context (dict): Contexto adicional para la validación del serializador, incluyendo la validación del correo electrónico.
        user_serializer (UserSerializer): Serializador utilizado para validar y crear el nuevo usuario.
        user (User): Instancia del modelo User correspondiente al nuevo usuario creado.
        token (Token): Token de autenticación generado para el nuevo usuario.

    Returns:
        Response: Token de autenticación y datos del usuario si es exitoso,
                  o errores de validación si no.
    '''
    context = {'validate_email': request.data.get('validate_email', True)}
    user_serializer = UserSerializer(data=request.data, context=context) 
    
    # Validación
    if not user_serializer.is_valid():
        return Response({
            'status': 'error', 
            'message': user_serializer.errors 
        }, status=status.HTTP_400_BAD_REQUEST)

    user_serializer.save()
    
    # Recupera usuario
    user = User.objects.get(id=user_serializer.data['id'])
    
    # Setea password para encriptación
    user.set_password(user_serializer.data['password'])
    user.save()
    
    # Se asocia token al usuario
    token = Token.objects.create(user=user)
    
    #user_serializer = UserSerializer(user_serializer)
    return Response({
        'status': 'success', 
        'message': 'User registered successfully.', 
        'data': {
            'token': token.key, 
            'user': user_serializer.data
        }
    }, status=status.HTTP_201_CREATED)

@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_update(request):
    '''
    Actualiza un usuario existente con los datos proporcionados.

    Parameters:
        request (HttpRequest): Solicitud HTTP que contiene los datos del usuario a actualizar.
        pk (int): ID del usuario a actualizar.

    Attributes:
        user (User): Instancia del modelo User correspondiente al usuario especificado.
        user_serializer (UserSerializer): Serializador utilizado para validar y actualizar el usuario.

    Returns:
        Response: Datos del usuario actualizados si la solicitud es exitosa,
                  o errores de validación si la solicitud no es válida,
                  o un mensaje de error si el usuario no existe.
    '''
    user = request.user

    if not user:
        return Response({
            'status': 'error', 
            'message': 'User does not exist.'
        }, status=status.HTTP_400_BAD_REQUEST)

    user_serializer = UserSerializer(user, data=request.data, partial= True)
    
    if not user_serializer.is_valid():
        return Response({
            'status': 'error', 
            'message': user_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
            
    user_serializer.save()
    return Response({
        'status': 'success', 
        'message': 'User update successfully.', 
        'data': {
            'user': user_serializer.data
        }
    }, status=status.HTTP_200_OK)
  
@api_view(['DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_delete(request):
    '''
    Elimina el usuario autenticado.

    Parameters:
        request (HttpRequest): Solicitud HTTP para eliminar el usuario.

    Returns:
        Response: Mensaje de confirmación si la eliminación es exitosa,
                  o un mensaje de error si el usuario no existe.
    '''
    user=request.user
    if not user:
        return Response({
            'status':'error', 
            'message': 'User does not exist.'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    user.delete()
    return Response({
        'status':'success', 
        'message': 'User has been deleted.'
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def user_login(request):
    '''
    Autentica a un usuario y genera un token de autenticación.

    Parameters:
        request (HttpRequest): Solicitud HTTP que contiene el correo electrónico y la contraseña del usuario.

    Attributes:
        user (User): Instancia del modelo User correspondiente al usuario autenticado.
        token (Token): Token de autenticación generado para el usuario.
        user_serializer (UserSerializer): Serializador utilizado para validar y devolver los datos del usuario.

    Returns:
        Response: Token de autenticación y datos del usuario si la autenticación es exitosa,
                  o un mensaje de error si la autenticación falla.
    '''
    try:
        user = User.objects.get(email=request.data['email'])
        #validacion password
        if not user.check_password(request.data['password']):
            return Response({
                'status': 'error', 
                'message': 'invalid password.'
            }, status= status.HTTP_400_BAD_REQUEST)
        
        if not user.is_active:
            return Response({
                'status': 'error', 
                'message': 'Inactive user.'
            }, status= status.HTTP_409_CONFLICT)

        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        
        '''#validacion para unico inicio de sesion
        if not created:
            token.delete()
            return Response({
                'status': 'error', 
                'message': 'user has already logged in.'
            }, status= status.HTTP_409_CONFLICT)'''

        return Response({
            'status': 'success',
            'message': 'User login successfully.',
            'data': {
                'token': token.key,
                'user': user_serializer.data
            }
        }, status=status.HTTP_200_OK)

    except User.DoesNotExist:
        return Response({
            'status': 'error', 
            'message': 'User does not exist.'
        }, status= status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_logout(request):
    '''
    Maneja la solicitud de cierre de sesión del usuario autenticado.

    Este endpoint permite al usuario autenticado cerrar sesión, eliminando el token de autenticación 
    y cualquier sesión activa asociada con el usuario.

    Parameters:
        request (HttpRequest): Solicitud HTTP que contiene el token del usuario a ser eliminado en los datos.

    Returns:
        Response: 
            - status: 'success', message: 'logout Ok.' con un código de estado 200 si la eliminación es exitosa.
            - status: 'error', message: 'Token does not exist.' con un código de estado 400 si el token no existe.

    '''
    token_key = request.data.get('key')
    token = Token.objects.filter(key=token_key).first()
    if not token:
        return Response({
            'status': 'error', 
            'message': 'Token does not exist.'
        }, status= status.HTTP_400_BAD_REQUEST)
    
    user = token.user
    
    #busca y elimina todas las sesiones activas (no expiradas)
    all_session = Session.objects.filter(expire_date__gte = datetime.now())
    if all_session.exists():
            for session in all_session:
                session_data = session.get_decoded()
                if user.id == int(session_data.get('_auth_user_id')):
                    session.delete()
        
    token.delete()
    return Response({
            'status': 'success', 
            'message': 'logout Ok.'
    }, status= status.HTTP_200_OK)
    
    
