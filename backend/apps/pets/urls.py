from django.urls import path
from .views import pet_register, pet_update, pet_delete


urlpatterns = [
    path('pet/register/', pet_register, name = 'pet_register'),
    path('pet/update/<int:pk>/', pet_update, name = 'pet_update'),
    path('pet/delete/<int:pk>/', pet_delete, name = 'pet_delete'),
    ]