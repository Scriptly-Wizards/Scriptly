from openai import OpenAI
from .event_handler import EventHandler


class OpenAIService:
    def __init__(self):
        self.client = OpenAI()

    def process_request(self, validated_data):
        # Use validated_data to interact with OpenAI
        # This is a simplified example; you'll need to adapt it based on your actual requirements
        assistant = self.client.beta.assistants.create(
            name="Scripter",
            instructions="As a top screenwriter with over 30 years of experience, you have worked with renowned directors and strived to produce top movies and TV series. Now, I will share my keywords, video length, video type, video purpose, with the goal of making a comprehensive and engaging video script for TikTok. ",
            tools=[{"type": "code_interpreter"}],
            model="gpt-4o",
        )
        thread = self.client.beta.threads.create()
        message = self.client.beta.threads.messages.create(
            thread_id=thread.id,
            role="user",
            # Assuming 'content' is part of validated_data
            content=validated_data
        )

        run = self.client.beta.threads.runs.create_and_poll(
            thread_id=thread.id,
            assistant_id=assistant.id,
            instructions="Please address the user as Jane Doe. The user has a premium account."
        )

        # with self.client.beta.threads.runs.stream(
        #     thread_id=thread.id,
        #     assistant_id=assistant.id,
        #     instructions="Please address the user as Jane Doe. The user has a premium account.",
        #     event_handler=EventHandler(),
        # ) as stream:
        #     stream.until_done()

        if run.status == 'completed':
            messages = self.client.beta.threads.messages.list(
                thread_id=thread.id
            ).model_dump_json()
            return messages
        else:
            print(f"Run status: {run.status}")
            return {"message": f"Run in status: {run.status}"}
