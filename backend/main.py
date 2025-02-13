from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use ["http://localhost:5173"] for stricter security
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],  # Allows all headers
)

# MongoDB Connection
MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client.quizdb  # Database name

# Convert BSON ObjectId to string
def serialize_document(document):
    document["_id"] = str(document["_id"])
    return document

@app.get("/")
async def root():
    return {"message": "Quiz API is running!"}

@app.get("/quizzes")
async def get_quizzes():
    quizzes = await db.quizzes.find().to_list(None)  # Get all quizzes
    return [serialize_document(quiz) for quiz in quizzes]

@app.get("/quiz/{quiz_id}")
async def get_quiz(quiz_id: int):
    quiz = await db.quizzes.find_one({"id": quiz_id})
    if quiz:
        return serialize_document(quiz)
    return {"error": "Quiz not found"}