from django.urls import path
from .views import user_register, user_update, user_login, user_delete, user_logout


urlpatterns = [
    path('user/register/', user_register, name = 'register_user'),
    path('user/update/<int:pk>/', user_update, name = 'update_user'),
    path('user/delete/<int:pk>/', user_delete, name = 'delete_user'),
    path('user/login/', user_login, name = 'login_user'),
    path('user/logout/', user_logout, name = 'logout_user'),
    ]