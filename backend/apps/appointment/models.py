from django.db import models
from django.contrib.auth.models import User
from apps.pets.models import Pets


class Appointment(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('CONFIRMED', 'Confirmed'),
        ('CANCELLED', 'Cancelled'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
    datetime = models.DateTimeField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')
    create_in = models.DateTimeField(auto_now_add=True)
    update_in = models.DateTimeField(auto_now=True)


    class Meta:
        indexes = [
            models.Index(fields=['user', 'datetime']),
            models.Index(fields=['pet', 'datetime']),
        ]
