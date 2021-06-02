import React from "react";
import "./game.css";

function gameMain() {
  const flip = () => {};
  const success = () => {};
  const fail = () => {};
  const reset = () => {};

  return (
    <div className="game">
      <div className="game__title">
        <h1>Check our cool features!</h1>
      </div>
      <div className="game__container">
        <div className="card" data-image="01">
          <div className="group1">
            <img src="/game/01.gif" alt="note" />
            <span>Movie English</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card " data-image="01">
          <div className="group1">
            <img src="/game/01.gif" alt="note" />
            <span>Movie English</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="02">
          <div className="group2">
            <img src="/game/02.gif" alt="note" />
            <span>Fun English Game</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="02">
          <div className="group2">
            <img src="/game/02.gif" alt="note" />
            <span>Fun English Game</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="03">
          <div className="group3">
            <img src="/game/03.gif" alt="note" />
            <span>Only Speak English</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="03">
          <div className="group3">
            <img src="/game/03.gif" alt="note" />
            <span>Only Speak English</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="04">
          <div className="group4">
            <img src="/game/04.gif" alt="note" />
            <span>Exams for School</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
        <div className="card" data-image="04">
          <div className="group4">
            <img src="/game/04.gif" alt="note" />
            <span>Exams for School</span>
          </div>
          <img class="card__back" src="/game/lightbulb.gif" alt="lightbulb" />
        </div>
      </div>
    </div>
  );
}

export default gameMain;
