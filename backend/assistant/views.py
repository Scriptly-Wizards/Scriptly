from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VideoDataSerializer
from .services import OpenAIService

services = {}


class VideoDataView(APIView):
    def post(self, request):
        serializer = VideoDataSerializer(data=request.data)
        if serializer.is_valid():
            token = request.headers.get('Authorization', 'default')
            assistant_service = OpenAIService()
            services[token] = assistant_service
            try:
                response_data = assistant_service.process_request(
                    serializer.generate_content())
                return Response(response_data, status=status.HTTP_201_CREATED)
            except Exception as e:
                # Log the exception e
                return Response({"error": "Failed to process request"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MusicDataView(APIView):
    def post(self, request):
        token = request.headers.get('Authorization', 'default')
        try:
            assistant_service = services[token]
        except KeyError:
            return Response({'message': 'assistant not found'}, status=status.HTTP_404_NOT_FOUND)
        try:
            prompt = "Give me the most appropriate musical style and theme for the script you provided. Use genres and vibes, not specific artists and songs. Please be brief and concise."
            response_data = assistant_service.process_request(prompt)
            return Response(response_data, status=status.HTTP_201_CREATED)
        except Exception as e:
            # Log the exception e
            return Response({"error": "Failed to process request"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
