from django.urls import path
from apps.users.api.api import user_register, user_update, user_login, user_perfil


urlpatterns = [
    path('user/register/', user_register, name = 'register_user_api'),
    path('user/update/<int:pk>/', user_update, name = 'update_user_api'),
    path('user/delete/<int:pk>/', user_update, name = 'delete_user_api'),
    path('user/login/', user_login, name = 'login_user_api'),
    path('user/perfil/', user_perfil, name = 'perfil_user_api'),
]