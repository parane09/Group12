from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    USER_TYPES = (
        ('STUDENT', 'Student'),
        ('COACH', 'Coach'),
        ('ADMIN', 'Admin'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    sport = models.CharField(max_length=50, blank=True, null=True)  # Specifically for Coaches

    def __clstr__(self):
        return f"{self.user.username} - {self.user_type}"

class SportRegistration(models.Model):
    sport_id = models.CharField(max_length=50)
    sport_name = models.CharField(max_length=100)
    full_name = models.CharField(max_length=200)
    student_id = models.CharField(max_length=50)
    email = models.EmailField()
    contact = models.CharField(max_length=20)
    gender = models.CharField(max_length=20)
    department = models.CharField(max_length=100)
    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.sport_name}"
