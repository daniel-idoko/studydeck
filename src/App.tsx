import { useState } from "react";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";
import Results from "./components/Results";
import "./index.css";
import questionsJson from "./questions.json";


function App() {
  const [questions, setQuestion] = useState(questionsJson)
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [grades, setGrades] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  const handleGrade = (grade: number) => {
    const newGrades = [...grades];
    newGrades[index] = grade;
    setGrades(newGrades);
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setShowAnswer(false);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setShowAnswer(false);
    }
  };

  const handleSubmit = () => {
    setFinished(true);
  };

  const restart = () => {
    setIndex(0);
    setGrades([]);
    setShowAnswer(false);
    setFinished(false);
  };

  if (finished) {
    return <Results questions={questions} grades={grades} onRestart={restart} />;
  }

  return (
    <div className="app">
      <Navbar />
      <ThemeToggle />
      <ProgressBar progress={progress} />
      <Card
        question={current}
        showAnswer={showAnswer}
        onShowAnswer={() => setShowAnswer(true)}
      />

      <div className="grade-buttons">
        {[1, 2, 3, 4, 5].map((g) => (
          <button
            key={g}
            className={`grade-btn ${grades[index] === g ? "selected" : ""}`}
            onClick={() => handleGrade(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="btn prev" onClick={prev} disabled={index === 0}>
          Previous
        </button>
        {index === questions.length - 1 ? (
          <button className="btn submit" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="btn next" onClick={next}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
