import React from "react";
import menuIcon from "../assets/menu.png";
import logo from "../assets/logo.png";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile from "../assets/user_profile.jpg";
import searchIcon from "../assets/search.png";
import ytIcon from "../assets/youtube.svg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left-side">
        <img
          onClick={() => setSidebar((prew) => (prew === true ? false : true))}
          src={menuIcon}
          alt="menuIcon"
        />
        <Link to="YoutubeClone">
          <img className="logo" src={logo} alt="" />
          <img className="logo__small" src={ytIcon} alt="" />
        </Link>
      </div>
      <div className="navbar__middile-side">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="navbar__right-side">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img className="profile-pic" src={profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
