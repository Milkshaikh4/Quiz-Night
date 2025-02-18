# Quiz Night Web Application - Frontend

## Overview

This is the frontend of the **Quiz Night Web Application**, built using **React** and **Vite**. It provides a dynamic and interactive interface for users to select quizzes, answer questions, and view their final scores. The frontend communicates with a **FastAPI** backend that fetches quiz data stored in a **MongoDB** database.

## Tech Stack

- **React** (Vite) - Frontend framework
- **JavaScript/TypeScript** - Development languages
- **Vite** - Build and development server
- **TailwindCSS** (optional) - Styling
- **Axios** - API requests
- **React Router** - Navigation

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Application pages (e.g., Home, Quiz, Results)
│   ├── context/           # Context used for propogating data through screens
│   ├── api.jsx            # API service for fetching data
│   ├── App.jsx            # Main React component
│   └── main.jsx           # Application entry point
│
├── public/                # Static files
│
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Frontend documentation
```

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation & Setup

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-folder>/frontend
```

### 2. Install Dependencies

```sh
npm install
```

or using Yarn:

```sh
yarn install
```

### 3. Start the Development Server

```sh
npm run dev
```

or

```sh
yarn dev
```

By default, the frontend will be available at `http://localhost:5173/`.

## Environment Variables

If API endpoints require configuration, create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Make sure the backend is running before testing API calls.

## Build for Production

To create an optimized production build, run:

```sh
npm run build
```

or

```sh
yarn build
```

The output will be generated in the `dist/` folder, ready for deployment.

## Linting & Formatting

Run ESLint to check for code issues:

```sh
npm run lint
```

To format code using Prettier:

```sh
npm run format
```

## Future Enhancements

- Implement UI animations and transitions.
- Add user authentication for personalized quiz experiences.
- Improve mobile responsiveness.
- Implement leaderboard and quiz history tracking.

## Contributing

If you'd like to contribute, feel free to submit a pull request. Please follow the coding guidelines and ensure the project remains clean and modular.

---
Enjoy building and using the **Quiz Night Web Application**! 🎉

