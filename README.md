# Quiz Night Web Application

## Overview

This project is a web-based quiz application built for an upcoming quiz night event. The application allows players to select a quiz, answer questions, and view their final score. The quiz data is stored in a MongoDB database and is served through a FastAPI backend, while the frontend is developed using React with Vite.

## Project Structure

```
├── backend/               # Backend service using FastAPI & Uvicorn
│   ├── main.py           # Entry point for the FastAPI application
│   ├── models/           # MongoDB models (if applicable)
│   ├── routes/           # API routes
│   ├── database.py       # MongoDB connection setup
│   ├── utils/            # Utility functions
│   └── requirements.txt  # Python dependencies
│
├── frontend/              # Frontend application using React (Vite)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
│
├── quiz-data.json         # JSON file containing quiz questions
├── Makefile               # Automation commands for setup and execution
└── requirements.txt        # Python dependencies at root
```

## Prerequisites

Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (for frontend)
- Conda (for backend environment management) optional you could install everything in your default python environment but that is not recommended
- [MongoDB](https://www.mongodb.com/) (for database storage)

## Installation & Setup

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Setup Backend

Create a new Conda environment and install dependencies:

```sh
conda create --name quiz-night python=3.9 -y
conda activate quiz-night
pip install -r requirements.txt
```

Start the backend server:

```sh
make start_backend
```

This runs the FastAPI server using Uvicorn.

### 3. Setup Frontend

Navigate to the frontend directory, install dependencies, and start the frontend server:

```sh
cd frontend
npm install
npm run dev
```

or, if at project root

```sh
make start_frontend
```

The frontend will be available at `http://localhost:3000/`.

### 4. Start MongoDB

Ensure MongoDB is installed and running, I have a linux laptop so start mongo translates to `sudo systemctl start mongod`, please translate to your operating system. You will have to install mongo on your device and start a MongoDB instance:

```sh
make start_mongo
```

## Importing Quiz Data into MongoDB

If you need to import the `quiz-data.json` file into MongoDB, there are two different approaches:

### Using `mongosh`
If you prefer using `mongosh` - mongo shell - follow these steps, it's more of a manual approach but more reliable in my opinion:

1. Start MongoDB (if not already running):

   ```sh
   make start_mongo
   ```

2. Open `mongosh` and use the following command to import the quiz data:

    ```sh
    mongosh
    use quizdb
    load("data-import-quiz-data.json")
    ```
In this approach we use the file `data-import-quiz-data.json` because mongosh accepts importing of database items in a different structure. It needs an array as the first element. So running this command should be fairly trivial. Please ask me for details if there are any issues. 

3. Verify the data: 
    ```sh
    db.quizzes.find().pretty()
    ```

### Using Python Script 
Alternatively, you can use Python to load `data-import-quiz-data.json` into MongoDB. I haven't tested the approach but hopefully it works just as well:

Use the following Python script to load `quiz-data.json` into the database:

   ```python
   import json
   from pymongo import MongoClient

   # Connect to MongoDB
   client = MongoClient("mongodb://localhost:27017/")
   db = client["quizdb"]  # Database name
   collection = db["quizzes"]  # Collection name

   # Load quiz data
   with open("database-import-quiz-data.json", "r") as file:
       data = json.load(file)

   # Insert data into MongoDB
   collection.insert_many(data)
   print("Quiz data inserted successfully!")
   ```

To run the script:

   ```sh
   python insert_quiz_data.py
   ```

### Stopping Services

To stop MongoDB:

```sh
make stop_mongo
```

## Running Tests

To run backend tests:

```sh
make test
```

This executes tests using `pytest` with coverage analysis.

## Additional Notes

- Ensure all necessary dependencies are listed in `requirements.txt`.
- The database connection settings in `backend/database.py` should match your local MongoDB instance.
- Any changes to the frontend should be followed by `npm run build` to create an optimized production build.

## Future Enhancements

- Implement user authentication for personalized quizzes.
- Store quiz results and user scores in MongoDB.
- Improve UI/UX for a more interactive experience.

Enjoy the quiz night application!

