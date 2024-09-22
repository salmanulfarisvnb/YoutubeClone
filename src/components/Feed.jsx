import React from "react";
import thumbline1 from "../assets/thumbnail1.png";
import thumbline2 from "../assets/thumbnail2.png";
import thumbline3 from "../assets/thumbnail3.png";
import thumbline4 from "../assets/thumbnail4.png";
import thumbline5 from "../assets/thumbnail5.png";
import thumbline6 from "../assets/thumbnail6.png";
import thumbline7 from "../assets/thumbnail7.png";
import thumbline8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4250`} className="card">
        <img src={thumbline1} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </Link>
      <div className="card">
        <img src={thumbline2} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline3} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline4} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline5} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline6} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline7} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbline8} alt="" />
        <h2>Amazing place of thailand</h2>
        <h3>SalmanVlog</h3>
        <p>1 M views &#x2022; 19 hours ago</p>
      </div>
    </div>
  );
};

export default Feed;
