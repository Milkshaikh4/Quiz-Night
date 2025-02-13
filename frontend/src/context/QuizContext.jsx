import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes, currentQuiz, setCurrentQuiz, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
};
