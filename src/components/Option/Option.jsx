import s from "./Option.module.css";

const Option = ({ updateFeedback, totalFeedback, resetVotes }) => {
  return (
    <div className={s.buttonRow}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback !== 0 && (
        <button onClick={() => resetVotes()}>Reset</button>
      )}
    </div>
  );
};
export default Option;
