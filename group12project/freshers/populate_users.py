import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'freshers_project.settings')
django.setup()

from django.contrib.auth.models import User
from core.models import UserProfile

def create_users():
    # Students
    for i in range(1, 4):
        username = f'stud{i}'
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, password=username)
            UserProfile.objects.create(user=user, user_type='STUDENT')
            print(f"Created student: {username}")

    # Admin
    if not User.objects.filter(username='admin').exists():
        user = User.objects.create_superuser(username='admin', password='admin', email='admin@example.com')
        UserProfile.objects.create(user=user, user_type='ADMIN')
        print("Created admin: admin")

    # Coaches
    sports = [
        'Cricket', 'Football', 'Volleyball', 'Badminton', 'Table Tennis', 
        'Basketball', 'Athletics', 'Swimming', 'Rugby', 'Netball', 
        'Chess', 'Carrom', 'Tennis', 'Handball', 'Cycling', 'Tug of War', 
        'Kabaddi', 'Shot Put', 'Long Distance Run', 'E-Sports'
    ]
    for sport in sports:
        username = sport.replace(' ', '')
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, password=username)
            UserProfile.objects.create(user=user, user_type='COACH', sport=sport)
            print(f"Created coach for: {sport} (Username: {username})")

if __name__ == '__main__':
    create_users()
