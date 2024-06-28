# urls.py
from django.urls import path
from .views import VideoDataView

urlpatterns = [
    path('v1/assistant/', VideoDataView.as_view(), name='assistant'),
]
