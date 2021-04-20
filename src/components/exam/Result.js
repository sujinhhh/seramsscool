import React, { useEffect } from "react";
import { firebaseStore } from "../../config/fbConfig";
import "./Result.css";

export const Result = ({ score, playAgain }) => {
  useEffect(() => {
    firebaseStore.collection("exam").add({
      exam: score,
      createdAt: new Date(),
    });

    // 열람하기
    // .onSnapshot((snapshot) => {
    //   console.log(snapshot.docs.map((doc) => doc.data().score));

    //   setNewScore(snapshot.docs.map((doc) => doc.data().score));
    // })
  }, []);
  return (
    <div className="score-board">
      <div>
        <h1>
          <small>Your total score is</small> {score}
        </h1>
        {score > 20 ? (
          <h1>Good Job. You get one point of ⭐️ </h1>
        ) : (
          <h1>Not too bad, Don't give up! </h1>
        )}
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
};
