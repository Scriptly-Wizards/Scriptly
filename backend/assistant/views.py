from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VideoDataSerializer
from .services import OpenAIService

import markdown2
from xhtml2pdf import pisa
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import render_to_string

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

class GeneratePDFView(APIView):
    def post(self, request):
        id = request.data.get('id', None)
        if id is None:
            return Response({"error": "Missing ID parameter"}, status=status.HTTP_400_BAD_REQUEST)
        
        json_string = {
            "value": "Great! Let's craft an engaging TikTok video script for you. We'll focus on showcasing cute pet moments, providing quick pet care tips, and including some funny animal clips to keep viewers entertained.\\n\\n---\\n\\n### Video Script: Cute and Funny Pet Moments (10 Seconds)\\n\\n**Opening Scene (0-2 seconds):**  \\n*Visuals:* Compilation clip of adorable pets (cats and dogs) playing.  \\n*Text on Screen:* \\\"Adorable Pets Alert! 🐾\\\"  \\n*Audio:* Upbeat, catchy music with happy, playful vibes.\\n\\n**Scene 2 (2-4 seconds):**  \\n*Visuals:* A dog performing a cute trick or a cat being playful.  \\n*Text on Screen:* \\\"Did you know? 🧠\\\"  \\n*Voiceover/Narration:* \\\"Pet care tip: Regular play keeps pets happy and healthy!\\\"  \\n*Audio:* Continue upbeat music, maybe with a light sound effect aligned with the trick.\\n\\n**Scene 3 (4-6 seconds):**  \\n*Visuals:* A funny clip of an animal doing something silly (e.g., a cat chasing its tail).  \\n*Text on Screen:* \\\"LOL! 😂\\\"  \\n*Audio:* Insert a funny sound effect here for the humor moment.\\n\\n**Scene 4 (6-8 seconds):**  \\n*Visuals:* A cute pet snuggling or being affectionate with its owner.  \\n*Text on Screen:* \\\"So much love! ❤️\\\"  \\n*Voiceover/Narration:* \\\"Share your pet moments! Tag us @YourHandle!\\\"  \\n*Audio:* Music continues with an inviting tone.\\n\\n**Closing Scene (8-10 seconds):**  \\n*Visuals:* A quick compilation of more cute animal clips with owners.  \\n*Text on Screen:* \\\"Follow for more! 🐶🐱 #CutePets #PetCare\\\"  \\n*Audio:* Music crescendos to a happy, catchy finish.\\n\\n---\\n\\n### Additional Notes:\\n\\n- **Music Selection**: Choose a vibrant, happy track that complements the playful and loving nature of the clips.\\n- **Text and Graphics**: Use a fun, bold font that's easy to read and add animated stickers/emojis to enhance the visuals.\\n- **Editing**: Ensure smooth transitions between clips to maintain engagement throughout the 10-second video.\\n- **Hashtags**: Include relevant hashtags in the video description to increase reach, such as #CutePets, #PetCare, #FunnyAnimals, #Dogs, #Cats, #PetTips.\\n\\nFeel free to adjust or add elements to tailor the video to your specific style and branding. Remember, keeping the content fast-paced and visually appealing will help retain viewer attention on TikTok. Enjoy creating your adorable and engaging pet video, Jane Doe!"
        }
        
        # 预处理内容
        processed_content = self.preprocess_content(json_string["value"])
        
        # 将 Markdown 转换为 HTML
        html_content = markdown2.markdown(processed_content, extras=["break-on-newline", "tables", "fenced-code-blocks"])
        
        # 渲染 HTML 模板
        html_string = render_to_string('pdf_template.html', {'content': html_content})
        
        # 使用 xhtml2pdf 生成 PDF
        buffer = BytesIO()
        pisa_status = pisa.CreatePDF(html_string, dest=buffer, encoding='UTF-8')
        
        if pisa_status.err:
            return HttpResponse("PDF generation error: {}".format(pisa_status.err), status=500)
        
        buffer.seek(0)
        response = HttpResponse(buffer, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="output.pdf"'
        return response
    

    def preprocess_content(self, content):
        # 处理换行符
        content = content.replace('\\n', '\n')
        
        # 移除转义的引号
        content = content.replace('\\"', '"')
        
        return content