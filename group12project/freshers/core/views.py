from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from .models import UserProfile, SportRegistration
import json


def login_view(request):
    if request.method == 'POST':
        user_type = request.POST.get('user_type')
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        print(f"DEBUG: Login attempt - Type: {user_type}, User: {username}, Pass: {password}")
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            print(f"DEBUG: Authenticate success for {username}")
            if hasattr(user, 'profile'):
                print(f"DEBUG: Profile found for {username}, type: {user.profile.user_type}")
                if user.profile.user_type == user_type:
                    login(request, user)
                    print(f"DEBUG: Login success for {username}")
                    if user_type == 'STUDENT':
                        return redirect('index')
                    elif user_type == 'COACH':
                        return redirect('coach_dashboard')
                    elif user_type == 'ADMIN':
                        return redirect('admin_dashboard')
                else:
                    messages.error(request, "Invalid user type for this account.")
                    print(f"DEBUG: Type mismatch - Form: {user_type}, DB: {user.profile.user_type}")
            else:
                messages.error(request, "User has no profile.")
                print(f"DEBUG: No profile for {username}")
        else:
            messages.error(request, "Invalid username or password.")
            print(f"DEBUG: Authenticate failed for {username}")
            
    return render(request, 'core/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def index(request):
    if request.user.profile.user_type == 'COACH':
        return redirect('coach_dashboard')
    return render(request, 'core/index.html')

@login_required
def sports(request):
    return render(request, 'core/sports.html')

@login_required
def schedule(request):
    return render(request, 'core/schedule.html')

@login_required
def coaches(request):
    return render(request, 'core/coaches.html')

@login_required
def news(request):
    return render(request, 'core/news.html')

@login_required
def coach_dashboard(request):
    if request.user.profile.user_type != 'COACH':
        return redirect('index')
    
    sport = request.user.profile.sport
    registrations = SportRegistration.objects.filter(sport_name=sport)
    return render(request, 'core/coach_dashboard.html', {'sport': sport, 'registrations': registrations})

@login_required
def admin_dashboard(request):
    if request.user.profile.user_type != 'ADMIN':
        return redirect('index')
    
    registrations = SportRegistration.objects.all().order_by('sport_name')
    return render(request, 'core/admin_dashboard.html', {'registrations': registrations})

@login_required
def register_sport(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            SportRegistration.objects.create(
                sport_id=data.get('sport_id'),
                sport_name=data.get('sport_name'),
                full_name=data.get('full_name'),
                student_id=data.get('student_id'),
                email=data.get('email'),
                contact=data.get('contact'),
                gender=data.get('gender'),
                department=data.get('department')
            )
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=405)

@login_required
def get_registrations(request, sport_id):
    registrations = SportRegistration.objects.filter(sport_id=sport_id).values()
    return JsonResponse(list(registrations), safe=False)

@login_required
def delete_registration(request, reg_id):
    if request.user.profile.user_type != 'ADMIN':
        return JsonResponse({'status': 'error', 'message': 'Unauthorized'}, status=403)
    
    reg = get_object_or_404(SportRegistration, id=reg_id)
    reg.delete()
    return JsonResponse({'status': 'success'})

@login_required
def get_stats(request):
    total_registrations = SportRegistration.objects.count()
    # Also get counts per sport
    from django.db.models import Count
    sport_counts = SportRegistration.objects.values('sport_id').annotate(count=Count('id'))
    counts_dict = {item['sport_id']: item['count'] for item in sport_counts}
    
    return JsonResponse({
        'total': total_registrations,
        'by_sport': counts_dict
    })
