# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('v1/assistant/', views.video_assistant, name='video_assistant'),
]
