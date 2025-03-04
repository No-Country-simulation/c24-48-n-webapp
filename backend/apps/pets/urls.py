from django.urls import path
from . import views
from . views import pets_filter, pet_register, pet_update, pet_delete, pet_upload_photos, pets_get_available

urlpatterns = [
    path('pets/filter', pets_filter, name='pets_filter'),
    path('pet/register/', pet_register, name = 'pet_register'),
    path('pet/update/', pet_update, name = 'pet_update'),
    path('pet/delete/', pet_delete, name = 'pet_delete'),
    path('pet/upload_photos/', pet_upload_photos, name = 'pet_upload_photos'),
    path('pet/pets_available/', pets_get_available, name = 'pets_get_available'),
]
