from django.urls import path
from . import views

urlpatterns = [
    path('pets', views.filter, name='filter')
]
