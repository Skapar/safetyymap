# YourProjectName/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('SafetyMap/', include('SafetyMap.urls')),
    path('admin/', admin.site.urls),
    
]
