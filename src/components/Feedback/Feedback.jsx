import style from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <div>
      <ul className={style.ulStyle}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive: {Math.round((good / totalFeedback) * 100)}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
