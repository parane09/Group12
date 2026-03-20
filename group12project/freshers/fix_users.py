import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'freshers_project.settings')
django.setup()

from django.contrib.auth.models import User
from core.models import UserProfile

def fix_users():
    # Students
    for i in range(1, 4):
        username = f'stud{i}'
        user, created = User.objects.get_or_create(username=username)
        user.set_password(username)
        user.save()
        
        profile, p_created = UserProfile.objects.get_or_create(user=user)
        profile.user_type = 'STUDENT'
        profile.save()
        print(f"Fixed/Created student: {username}")

    # Admin
    user, created = User.objects.get_or_create(username='admin')
    user.set_password('admin')
    user.is_staff = True
    user.is_superuser = True
    user.save()
    profile, p_created = UserProfile.objects.get_or_create(user=user)
    profile.user_type = 'ADMIN'
    profile.save()
    print("Fixed/Created admin: admin")

    # Coaches
    sports = [
        'Cricket', 'Football', 'Volleyball', 'Badminton', 'Table Tennis', 
        'Basketball', 'Athletics', 'Swimming', 'Rugby', 'Netball', 
        'Chess', 'Carrom', 'Tennis', 'Handball', 'Cycling', 'Tug of War', 
        'Kabaddi', 'Shot Put', 'Long Distance Run', 'E-Sports'
    ]
    for sport in sports:
        username = sport.replace(' ', '')
        user, created = User.objects.get_or_create(username=username)
        user.set_password(username)
        user.save()
        profile, p_created = UserProfile.objects.get_or_create(user=user)
        profile.user_type = 'COACH'
        profile.sport = sport
        profile.save()
        print(f"Fixed/Created coach for: {sport}")

if __name__ == '__main__':
    fix_users()
