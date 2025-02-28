from django.urls import path
from . import views


urlpatterns = [
    path('appointment/shedule', views.schedule_appointment, name='schedule_appointment'),
    path('appointment/<int:appointment_id>', views.accept_reject_appointments, name='accept_reject_appointment'),
]
