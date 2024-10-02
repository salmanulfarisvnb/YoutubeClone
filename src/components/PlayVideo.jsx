import React, { useEffect, useState } from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import userprofile from "../assets/user_profile.jpg";
import { api_key, convertCount } from "../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState();

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api_key}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div className="play-video">
      {/* <video controls autoPlay src={video1}></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h2>{apiData ? apiData.snippet.title : "here"}</h2>
      <div className="play-video__info">
        <p className="views-times">
          {apiData ? convertCount(apiData.statistics.viewCount) : "16k"} Views
          &#8226;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow : ""}
        </p>
        <div className="play-video__info-icon">
          <img src={like} alt="" />
          <p>{apiData ? convertCount(apiData.statistics.likeCount) : ""}</p>
          <img src={dislike} alt="" />
          <p>2</p>
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
          <h3>{apiData ? apiData.snippet.channelTitle : ""}</h3>
          <p>102 K Subscribers</p>
        </div>
        <button>Subscibe</button>
      </div>
      <div className="play-video__comment">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : ""}</p>
        <hr />
        <div className="user__active">
          <h3>
            {" "}
            {apiData ? convertCount(apiData.statistics.commentCount) : ""}{" "}
            comments
          </h3>
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
