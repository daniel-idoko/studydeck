interface ResultsProps {
  questions: { topic: string }[];
  grades: number[];
  onRestart: () => void;
}

export default function Results({ questions, grades, onRestart }: ResultsProps) {
  return (
    <div className="results">
      <h1>📘 Study Results</h1>
      <div className="results-list">
        {questions.map((q, i) => (
          <div key={i} className="result-item">
            <span>{q.topic}</span>
            <span className={`grade grade-${grades[i]}`}>
              {grades[i] ?? "-"}
            </span>
          </div>
        ))}
      </div>

      <button className="btn restart" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}
