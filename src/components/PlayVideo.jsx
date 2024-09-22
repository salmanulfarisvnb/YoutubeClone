import React from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import userprofile from "../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video controls autoPlay src={video1}></video>
      <h2>The best sea shorts in my life</h2>
      <div className="play-video__info">
        <p className="views-times">1 M Views &#8226; 16 Houre ago</p>
        <div className="play-video__info-icon">
          <img src={like} alt="" />
          <p>Like</p>
          <img src={dislike} alt="" />
          <p>Dislike</p>
          <img src={share} alt="" />
          <p>Share</p>
          <img src={save} alt="" />
          <p>Save</p>
        </div>
      </div>
      <hr />

      <div className="play-video__discription">
        <img src={jack} alt="" />
        <div className="channel-info">
          <h3>Sallu Vlog</h3>
          <p>102 K Subscribers</p>
        </div>
        <button>Subscibe</button>
      </div>
      <div className="play-video__comment">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          molestiae reiciendis cumque illo necessitatibus unde, nesciunt dolorem
          quasi eligendi tempora libero deleniti inventore sapiente quaerat odio
          fugit. Ad, eligendi non.
        </p>
        <hr />
        <div className="user__active">
          <h3>4 K comments</h3>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="user__active__comment">
            <img src={userprofile} alt="" />
            <div>
              <h3>
                @ Sarika <span>2 minute ago</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, nulla, cum aperiam neque eaque exercitationem
                voluptatem in qui asperiores nihil unde beatae? Explicabo enim
                praesentium sit
              </p>
              <div className="comment__action">
                <img src={like} alt="" />
                <span>3</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
