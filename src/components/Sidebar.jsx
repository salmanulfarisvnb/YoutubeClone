import React from "react";
import home from "../assets/home.png";
import automobiles from "../assets/automobiles.png";
import blogs from "../assets/blogs.png";
import games from "../assets/game_icon.png";
import sports from "../assets/sports.png";
import entertainments from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import megan from "../assets/megan.png";
import tom from "../assets/tom.png";
import cameron from "../assets/cameron.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-link">
        <div className="side-link">
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="" /> <p>automobiles</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="" /> <p>blogs</p>
        </div>
        <div className="side-link">
          <img src={games} alt="" /> <p>games</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="" /> <p>sports</p>
        </div>
        <div className="side-link">
          <img src={entertainments} alt="" /> <p>entertainments</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="" /> <p>tech</p>
        </div>
        <div className="side-link">
          <img src={music} alt="" /> <p>music</p>
        </div>
        <div className="side-link">
          <img src={news} alt="" /> <p>news</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>SUBSCRIBED</h3>
          <div className="side-link">
            <img src={tom} alt="" /> <p>salmanfaris</p>
          </div>
          <div className="side-link">
            <img src={simon} alt="" /> <p>unnikrshnan</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="" /> <p>saranya</p>
          </div>
          <div className="side-link">
            <img src={jack} alt="" /> <p>archana</p>
          </div>
          <div className="side-link">
            <img src={cameron} alt="" /> <p>mr beans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
