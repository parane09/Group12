from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.index, name='index'),
    path('sports/', views.sports, name='sports'),
    path('schedule/', views.schedule, name='schedule'),
    path('coaches/', views.coaches, name='coaches'),
    path('news/', views.news, name='news'),
    path('coach-dashboard/', views.coach_dashboard, name='coach_dashboard'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('api/register/', views.register_sport, name='api_register'),
    path('api/registrations/<str:sport_id>/', views.get_registrations, name='api_get_registrations'),
    path('api/delete-registration/<int:reg_id>/', views.delete_registration, name='api_delete_registration'),
    path('api/stats/', views.get_stats, name='api_stats'),
]
