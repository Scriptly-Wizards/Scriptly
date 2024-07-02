# urls.py
from django.urls import path
from .views import VideoDataView
from .views import MusicDataView

urlpatterns = [
    path('v1/assistant/', VideoDataView.as_view(), name='assistant'),
    path('v1/assistant/music/', MusicDataView.as_view(), name='assistant-music'),
]
