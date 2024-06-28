from rest_framework import serializers

class VideoDataSerializer(serializers.Serializer):
    keywords = serializers.CharField(max_length=255, required=True)
    video_duration = serializers.CharField(max_length=50, required=True)
    video_scenes = serializers.CharField(max_length=500, required=False)
    video_type = serializers.CharField(max_length=100, required=True)
    video_genre = serializers.CharField(max_length=100, required=False)
    target_audience = serializers.CharField(max_length=255, required=False)
    purpose = serializers.CharField(max_length=255, required=True)
    cta = serializers.CharField(max_length=255, required=False)
    tone_and_style = serializers.CharField(max_length=255, required=False)
    setting_and_location = serializers.CharField(max_length=255, required=False)
    characters_and_roles = serializers.CharField(max_length=255, required=False)
    script_format = serializers.CharField(max_length=255, required=False)
    visual_elements = serializers.CharField(max_length=255, required=False)
    audio_elements = serializers.CharField(max_length=255, required=False)
    branding = serializers.CharField(max_length=255, required=False)
    additional_resources = serializers.CharField(max_length=500, required=False)