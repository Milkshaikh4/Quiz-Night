import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const ScoreScreen = () => {
  const { score, setScore } = useContext(QuizContext);
  const navigate = useNavigate();

  const restartQuiz = () => {
    setScore(0);
    navigate("/");
  };

  return (
    <div>
      <h1>Your Score: {score}</h1>
      <button onClick={restartQuiz}>Try Again</button>
    </div>
  );
};

export default ScoreScreen;
