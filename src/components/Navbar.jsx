import React from "react";
import menuIcon from "../assets/menu.png";
import logo from "../assets/logo.png";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile from "../assets/user_profile.jpg";
import searchIcon from "../assets/search.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left-side">
        <img src={menuIcon} alt="menuIcon" />
        <img className="logo" src={logo} alt="" />
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
