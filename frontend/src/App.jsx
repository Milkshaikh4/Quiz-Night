import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext.jsx";
import QuizList from "./components/QuizList.jsx";
import QuizScreen from "./components/QuizScreen.jsx";
import ScoreScreen from "./components/ScoreScreen.jsx";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizScreen />} />
          <Route path="/score" element={<ScoreScreen />} />
        </Routes>
      </Router>
    </QuizProvider>
  )
}

export default App
