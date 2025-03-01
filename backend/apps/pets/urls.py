from django.urls import path
from . import views
from views import pets_filter, pet_register, pet_update, pet_delete, pet_upload_photos

urlpatterns = [
    path('pets/filter', pets_filter, name='pets_filter'),
    path('pet/register/', pet_register, name = 'pet_register'),
    path('pet/update/', pet_update, name = 'pet_update'),
    path('pet/delete/', pet_delete, name = 'pet_delete'),
    path('pet/delete/', pet_upload_photos, name = 'pet_upload_photos'),
]
