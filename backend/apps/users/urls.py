from django.urls import path
from .views import user_register, user_update, user_login, user_delete, user_logout


urlpatterns = [
    path('user/register/', user_register, name = 'user_register'),
    path('user/update/', user_update, name = 'user_update'),
    path('user/delete/', user_delete, name = 'user_delete'),
    path('user/login/', user_login, name = 'user_login'),
    path('user/logout/', user_logout, name = 'user_logout'),
    ]