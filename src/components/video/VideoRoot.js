import React, { useState, useEffect } from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./Video.css";
import ReactPlayer from "react-player";

const VideoRoot = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(requests);
  }, []);
  return (
    <div className="videoRoot">
      <Banner />
      <div className="videoRoot-container">
        {/* nav */}

        {movies.map((movie) => (
          <div className="video-container" key={movie.id}>
            <Row title="Netflix Original" youVideo={movie} isLargeRow />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoRoot;
