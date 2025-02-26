from django.urls import path
from . import views

urlpatterns = [
    path('pets/filter', views.pets_filter, name='pets_filter')
]
