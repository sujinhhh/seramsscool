import React from "react";
import "../../scss/styles.scss";
import {
  BsInfoCircleFill,
  BsCalendar2CheckFill,
  BsFillChatRightDotsFill,
} from "react-icons/bs";

function Steps() {
  return (
    <div className="steps-container">
      <h1>English Programs</h1>
      <ol>
        <li>
          <div class="icon">
            <BsInfoCircleFill className="fa-solid fa-circle-info" />
          </div>
          <div class="title">Personel Info</div>
          <div class="descr">
            Update Your Pernonel Information, Your basic destails in our system.
          </div>
        </li>
        <li>
          <div class="icon">
            <BsCalendar2CheckFill className="fa-solid fa-graduation-cap" />
          </div>
          <div class="title">Education Info</div>
          <div class="descr">
            Update Your Educational Information, Your college destails in our
            system.
          </div>
        </li>
        <li>
          <div class="icon">
            <BsFillChatRightDotsFill class="fa-solid fa-money-check" />
          </div>
          <div class="title">Reviewing Info</div>
          <div class="descr">
            We will Review your profile and update the status in our website.
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Steps;
