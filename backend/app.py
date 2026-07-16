from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI()

# Allowed Frontend URLs
origins = [
    "http://localhost:5173",
    "https://nexora-ai-blond-two.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "Nexora AI Backend Running"
    }


@app.post("/chat/")
async def chat(request: ChatRequest):
    try:
        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "user",
                    "content": request.message
                }
            ]
        )

        answer = completion.choices[0].message.content

        return {
            "user_message": request.message,
            "response": answer
        }

    except Exception as e:
        return {
            "user_message": request.message,
            "response": f"Error: {str(e)}"
        }