import React, { useState, useEffect } from "react";
// import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import "./Video.css";

function Row({ title, youVideo, isLargeRow }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row">
      <h2>{youVideo.title}</h2>
      <div className="row__posters">
        <div className="row-container">
          <div className="row-video">
            <ReactPlayer url={youVideo.video} width="100%" height="100%" />
          </div>
          <div className="video-info">
            <p>{youVideo.hash}</p>

            <span className="title clamp">
              안녕하세요, 새람쓰~쿨입니다. <br />
              {youVideo.contents} <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
