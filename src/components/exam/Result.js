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
          <small>박새람 학생 최종 점수는</small> {score}
          <small> 점 입니다</small>
        </h1>
        {score > 20 ? (
          <h1>잘하셨습니다. 보너스 ⭐️ 하나 추가됩니다</h1>
        ) : (
          <h1> 죄송하지만 ⭐️ 을 하나 가져갑니다</h1>
        )}
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
};
