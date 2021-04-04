import React from "react";
import "./Video.css";

const VideoRoot = () => {
  return (
    <div>
      <header>
        <div className="youtube-logo">
          <img src="./youtube.png" alt="" />
        </div>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </header>
      {/* <!-- Video Player --> */}
      <section className="player">
        <video
          src="https://sujinhhh.github.io/video/jin.mp4"
          controls
          width="00"
        ></video>
      </section>
      <div className="infoAndUpNext">
        {/* <!-- Video Info --> */}
        <section className="info">
          <div className="metadata">
            <ul className="hashtags">
              <li>#영어이모</li>
              <li>#코딱지영어</li>
              <li>#출산드라 작품</li>
            </ul>
            <div className="titleAndButton">
              <span className="title clamp">
                안녕하세요, 새람쓰~쿨입니다. <br />
                코딱까리 파면서 영어하는 스웨그.🤪 <br />
                좋아요 구독 눌러주세요
              </span>
              <button className="moreBnt">
                <i className="fas fa-caret-down"></i>
              </button>
            </div>

            <span className="views">1M</span>
          </div>
          <ul className="actions">
            <li>
              <button>
                <i className="active fas fa-thumbs-down"></i>
                <span>1M</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-thumbs-up"></i>
                <span>0</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-share"></i>
                <span>Save</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-plus"></i>
                <span>1K</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fab fa-font-awesome-flag"></i>
                <span>Share</span>
              </button>
            </li>
          </ul>

          {/* <!-- Channel dicripction --> */}
          <div className="channel">
            <div className="metadata">
              <img src="avatar.png" alt="sujinPic" />
              <div className="info">
                <span className="name">요미뿌니 티비</span>
                <span className="subscribers">1M Subscribers</span>
              </div>
            </div>
            <button className="subscribe">Subscribed</button>
          </div>
        </section>
        {/* <!-- Up Next --> */}
        {/* <section className="upNext">
          <div className="title">Up next</div>
          <ul>
            <li className="item">
              <div className="img">
                <img src="food.jpg" alt="" />
              </div>
              <div className="info">
                <span className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore magnam suscipit unde, voluptatibus commodi saepe
                  eveniet possimus dolore incidunt aspernatur ut explicabo
                  quaerat cupiditate illum, magni, molestiae voluptatum earum
                  id.
                </span>
                <span className="name"> 수진방송</span>
                <span className="views">1M views</span>
              </div>
              <button className="more">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </li>
            <li className="item">
              <div className="img">
                <img src="food.jpg" alt="" />
              </div>
              <div className="info">
                <span className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore magnam suscipit unde, voluptatibus commodi saepe
                  eveniet possimus dolore incidunt aspernatur ut explicabo
                  quaerat cupiditate illum, magni, molestiae voluptatum earum
                  id.
                </span>
                <span className="name"> 수진방송</span>
                <span className="views">1M views</span>
              </div>
              <button className="more">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </li>
            <li className="item">
              <div className="img">
                <img src="food.jpg" alt="" />
              </div>
              <div className="info">
                <span className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore magnam suscipit unde, voluptatibus commodi saepe
                  eveniet possimus dolore incidunt aspernatur ut explicabo
                  quaerat cupiditate illum, magni, molestiae voluptatum earum
                  id.
                </span>
                <span className="name"> 수진방송</span>
                <span className="views">1M views</span>
              </div>
              <button className="more">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </li>
          </ul>
        </section> */}
      </div>{" "}
    </div>
  );
};

export default VideoRoot;
