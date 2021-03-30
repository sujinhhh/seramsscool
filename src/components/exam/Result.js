import React from "react";

export const Result = ({ score, playAgain }) => {
  return (
    <div className="score-board">
      <div>
        <h1>{score}</h1>
        {score > 20 ? (
          <h1>축하합니다</h1>
        ) : (
          <h1> 죄송하지만 별을 하나 가져갑니다</h1>
        )}
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
};
