from django.shortcuts import render

# Create your views here.
# views.py
from django.http import JsonResponse
from django.views.decorators.http import require_POST
import json


@require_POST
def video_assistant(request):
    # Extract parameters from POST request data
    data = json.loads(request.body)
    keywords = data.get('keywords', [])
    video_duration = data.get('video_duration', '')
    video_scenes = data.get('video_scenes', [])
    video_type = data.get('video_type', '')
    video_genre = data.get('video_genre', '')
    target_audience = data.get('target_audience', {})
    purpose = data.get('purpose', '')
    cta = data.get('cta', '')
    tone_and_style = data.get('tone_and_style', {})
    key_messages = data.get('key_messages', [])
    setting_and_location = data.get('setting_and_location', {})
    characters_and_roles = data.get('characters_and_roles', [])
    script_format = data.get('script_format', '')
    visual_elements = data.get('visual_elements', {})
    audio_elements = data.get('audio_elements', {})
    branding = data.get('branding', {})
    additional_resources = data.get('additional_resources', {})
    budget = data.get('budget', {})
    timeline = data.get('timeline', {})
    # feedback_and_revisions = data.get('feedback_and_revisions', {})

    # Example logic: Constructing a response text based on received parameters
    response_text = (
        f"Received parameters:\n"
        f"Keywords: {keywords}\n"
        f"Video Duration: {video_duration}\n"
        f"Video Scenes: {video_scenes}\n"
        f"Video Type: {video_type}\n"
        f"Video Genre: {video_genre}\n"
        f"Target Audience: {target_audience}\n"
        f"Purpose: {purpose}\n"
        f"CTA: {cta}\n"
        f"Tone and Style: {tone_and_style}\n"
        f"Key Messages: {key_messages}\n"
        f"Setting and Location: {setting_and_location}\n"
        f"Characters and Roles: {characters_and_roles}\n"
        f"Script Format: {script_format}\n"
        f"Visual Elements: {visual_elements}\n"
        f"Audio Elements: {audio_elements}\n"
        f"Branding: {branding}\n"
        f"Additional Resources: {additional_resources}\n"
        f"Budget: {budget}\n"
        f"Timeline: {timeline}\n"
    )

    return JsonResponse({'response_text': response_text})
