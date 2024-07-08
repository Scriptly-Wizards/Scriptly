## SCRIPLTY

SCRIPLTY is an AI-powered platform designed to streamline the creative process for TikTok users. It provides comprehensive shooting recipes based on user prompts, including detailed video scripts, shooting suggestions, curated music tracks, and recommended samples. This helps users create engaging, high-quality content effortlessly.

## Installation

1. **Clone the repository:**

   ```shell
   git clone https://github.com/Scriptly-Wizards/Scriptly.git
   ```

2. **Configure backend:**

   ```shell
   cd Scriptly/backend/

   # Set up virtual environment
   python -m venv env

   # Activate virtual environment (macOS/Linux)
   source env/bin/activate

   # Install dependencies
   # (if you don't have pipenv, let chatgpt teach you how to install it)
   pipenv install

   # Set up environment variables
   touch .env

   # copy this line to .env file
   OPENAI_API_KEY="YOUR OPEN AI KEY"

   # Run the server
   python manage.py runserver
   ```

3. **Configure frontend:**

   ```shell
   cd Scriptly/frontend/

   # Install dependencies
   npm install

   # Run frontend
   npm start
   ```
