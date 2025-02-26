from django.urls import path
from . import views


urlpatterns = [
    path('appointment/shedule', views.schedule_appointment, name='schedule_appointment'),
]
