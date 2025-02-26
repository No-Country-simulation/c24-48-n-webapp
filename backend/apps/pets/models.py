from django.db import models


class Pets(models.Model):
    SIZE_CHOICES = [
        ('small', 'Small'),
        ('medium', 'Medium'),
        ('large', 'Large'),
    ]

    STATUS_CHOICES = [
        ('available', 'Available'),
        ('adopted', 'Adopted'),
        ('pending', 'Pending'),
    ]

    name = models.CharField(max_length=100)
    age = models.IntegerField()
    size = models.CharField(max_length=10, choices=SIZE_CHOICES)
    breed = models.CharField(max_length=100)
    health_status = models.CharField(max_length=100)
    photo_cover = models.URLField(max_length=500)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)


class PhotosPets(models.Model):
    photo = models.URLField(max_length=500, null=True, blank=True)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
