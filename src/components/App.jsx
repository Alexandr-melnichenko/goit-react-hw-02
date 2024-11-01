import "./App.css";
import Description from "./Description/Description";
import Option from "./Option/Option";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";
import Notification from "./Notification/Notification";
import { useEffect } from "react";

function App() {
  const [vote, setVote] = useState(() => {
    const savedVotes = JSON.parse(window.localStorage.getItem("saved-votes"));
    console.log(savedVotes);

    return savedVotes !== null ? savedVotes : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-votes", JSON.stringify(vote));
  }, [vote]);

  const totalFeedback = vote.good + vote.neutral + vote.bad;
  console.log(totalFeedback);

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setVote((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetVotes = () => {
    setVote({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetVotes={resetVotes}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={vote.good}
          neutral={vote.neutral}
          bad={vote.bad}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
}

export default App;
