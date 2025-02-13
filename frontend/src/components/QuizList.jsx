import { useEffect, useContext } from "react";
import { getQuizzes } from "../api.js";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const { quizzes, setQuizzes, setCurrentQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    getQuizzes().then(setQuizzes);
  }, []);

  return (
    <div>
      <h1>Select a Quiz</h1>
      {quizzes.map((quiz) => (
        <button key={quiz.id} className="answer-button" onClick={() => { setCurrentQuiz(quiz); navigate(`/quiz/${quiz.id}`); }}>
          {quiz.name}
        </button>
      ))}
    </div>
  );
};

export default QuizList;
