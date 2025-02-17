import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]); // Used to store the list of quizzes
  const [currentQuiz, setCurrentQuiz] = useState(null); // Used to store the individual quiz
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes, currentQuiz, setCurrentQuiz, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
};
