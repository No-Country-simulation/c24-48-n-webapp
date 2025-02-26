from django.urls import path
from . import views

urlpatterns = [
    path('pets/filter', views.filter, name='pets_filter')
]
