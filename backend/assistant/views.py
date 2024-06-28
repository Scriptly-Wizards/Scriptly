from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VideoDataSerializer
from openai import OpenAI

client = OpenAI()


# Create your views here.
# views.py
class VideoDataView(APIView):
    def post(self, request):
        serializer = VideoDataSerializer(data=request.data)
        if serializer.is_valid():
            assistant = client.beta.assistants.create(
                name="Scripter",
                instructions="As a top screenwriter with over 30 years of experience, you have worked with renowned directors and strived to produce top movies and TV series. ",
                tools=[{"type": "code_interpreter"}],
                model="gpt-4o",
            )
            thread = client.beta.threads.create()
            message = client.beta.threads.messages.create(
                thread_id=thread.id,
                role="user",
                content=serializer.generate_content()
            )
            run = client.beta.threads.runs.create_and_poll(
                thread_id=thread.id,
                assistant_id=assistant.id,
                instructions="Please address the user as Jane Doe. The user has a premium account."
            )
            if run.status == 'completed':
                messages = client.beta.threads.messages.list(
                    thread_id=thread.id
                ).model_dump_json()
                return Response(messages, status=status.HTTP_201_CREATED)
            else:
                print(run.status)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
