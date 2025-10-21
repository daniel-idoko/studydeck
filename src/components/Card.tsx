type Props = {
  question: {
    topic: string;
    category: string;
    answer: string;
  };
  showAnswer: boolean;
  onShowAnswer: () => void;
};

export default function Card({ question, showAnswer, onShowAnswer }: Props) {
  return (
    <div className="card">
      <h2>{question.topic}</h2>
      <p className="category">{question.category}</p>

      {!showAnswer ? (
        <button className="btn" onClick={onShowAnswer}>
          Show Answer
        </button>
      ) : (
        <div
          className="answer"
          dangerouslySetInnerHTML={{ __html: question.answer }}
        />
      )}
    </div>
  );
}
