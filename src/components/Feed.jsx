import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api_key, convertCount } from "../data";
import moment from "moment/moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api_key} `;

    await fetch(video_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  console.log(data);

  return (
    <div className="feed">
      {data.map((item, i) => (
        <Link
          key={i}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title} </h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {convertCount(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
