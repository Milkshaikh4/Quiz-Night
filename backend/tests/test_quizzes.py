import pytest
from fastapi import status
from bson import ObjectId

@pytest.mark.asyncio
async def test_get_all_quizzes(test_client):
    """Test retrieving all quizzes at once"""
    response = test_client.get("/api/quizzes") 

    assert response.status_code == status.HTTP_200_OK 
    quizzes = response.json()

    assert isinstance(quizzes, list)
    assert len(quizzes) == 2

@pytest.mark.asyncio
async def test_get_specific_quiz(test_client):
    """Test retrieving a quiz with a valid ID"""
    response = test_client.get("/api/quizzes")
    assert response.status_code == status.HTTP_200_OK

    quizzes = response.json()

    assert isinstance(quizzes, list)
    assert len(quizzes) == 2

    quiz_id = quizzes[0]["_id"]

    response = test_client.get(f"/api/quiz/{quiz_id}")
    assert response.status_code == status.HTTP_200_OK

@pytest.mark.asyncio
async def test_get_quiz_invalid_id(test_client):
    """Test retrieving a quiz with an invalid ID format."""
    invalid_id = "not_an_object_id"  # Provide an obviously invalid string
    response = test_client.get(f"/api/quiz/{invalid_id}")

    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert response.json()["detail"] == "Invalid quiz ID format"

@pytest.mark.asyncio
async def test_get_quiz_not_found(test_client):
    """Test retrieving a non-existent quiz."""
    non_existent_id = str(ObjectId())  # Generate a RANDOM VALID ObjectId (as a string)
    response = test_client.get(f"/api/quiz/{non_existent_id}")

    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json()["detail"] == "Quiz not found"