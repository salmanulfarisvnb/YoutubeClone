import React from "react";
import PlayVideo from "../components/PlayVideo";
import Recommented from "../components/Recommented";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="video-container">
      <PlayVideo videoId={videoId} />
      <Recommented />
    </div>
  );
};

export default Video;
