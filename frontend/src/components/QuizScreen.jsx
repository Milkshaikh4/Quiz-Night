import { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const QuizScreen = () => {
  const { currentQuiz, setScore } = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const restartQuiz = () => {
    setScore(0);
    navigate("/");
  };

  if (!currentQuiz) {
    return (
      <div>
        <h2>Oops something went wrong!</h2>
        <button onClick={restartQuiz}>Restart</button>
      </div>
    )
  };

  const question = currentQuiz.questions[currentIndex];

  const handleNext = () => {
    if (selectedAnswer !== null) {
      if (question.answers[selectedAnswer].isCorrect) {
        setScore((prevScore) => prevScore + 100);
      }

      if (currentIndex + 1 < currentQuiz.questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigate("/score");  // Move to score screen
      }
    }
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {question.answers.map((ans, index) => (
        <button key={index} className="answer-button" onClick={() => setSelectedAnswer(index)}>
          {ans.answer}
        </button>
      ))}
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuizScreen;
