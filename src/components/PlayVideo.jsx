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
    <div>
      <video controls autoPlay src={video1}></video>
    </div>
  );
};

export default PlayVideo;
