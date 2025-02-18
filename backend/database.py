from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)

def get_database():
    """Returns the original database (not a test database)."""
    return client["quizdb"]  # Uses the main database

db = get_database()