from fastapi import APIRouter, HTTPException, status
from backend.database import db
from bson import ObjectId

router = APIRouter()

def serialize_document(document):
    if "_id" in document:
        document["_id"] = str(document["_id"])
    return document

@router.get("/")
async def root():
    return {"message": "Quiz API is running!"}

@router.get("/quizzes")
async def get_quizzes():
    try:
        quizzes = await db.quizzes.find().to_list(None)
        return [serialize_document(quiz) for quiz in quizzes]
    except Exception as e: 
        print(f"Error getting quizzes: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving quizzes") 

@router.get("/quiz/{quiz_id}")
async def get_quiz(quiz_id: str):
    if not ObjectId.is_valid(quiz_id): 
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid quiz ID format")

    try:
        object_id = ObjectId(quiz_id) 

        quiz = await db.quizzes.find_one({"_id": object_id})
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving quizzes")
    
    if quiz:
        return serialize_document(quiz) 
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Quiz not found")
