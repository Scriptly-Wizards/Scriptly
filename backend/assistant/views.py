from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VideoDataSerializer
from .services import OpenAIService


class VideoDataView(APIView):
    def post(self, request):
        serializer = VideoDataSerializer(data=request.data)
        if serializer.is_valid():
            assistant_service = OpenAIService()
            try:
                response_data = assistant_service.process_request(
                    serializer.generate_content())
                return Response(response_data, status=status.HTTP_201_CREATED)
            except Exception as e:
                # Log the exception e
                return Response({"error": "Failed to process request"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
