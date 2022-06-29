import React, { useState, useEffect } from "react";
import "./hero-main.css";
import RingLoader from "react-spinners/RingLoader";

function Video() {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <div className="video">
      <iframe
        className="frame"
        src="https://my.spline.design/miniroomartcopy-bc13693ffdeece1cc674187f5ea32fb5/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <RingLoader
        color={"yellow"}
        loading={loading}
        size={150}
        className="loading"
      />

      <div className="video-title">
        <h1> My English Home Shcool </h1>
        <h5>
          With professional teachers, flexible learning schedules and courses
          for all levels, our live, online classes will have you speaking
          confidently in no time. Take individual courses even if you are in
          day-school, upgrade past courses in as little as 4 week with a 98%
          Post Secondary Acceptance rate. Ranked #1 Online School in Canada.
        </h5>
        <div className="school">
          <button className="btn-large waves-effect waves-light">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
