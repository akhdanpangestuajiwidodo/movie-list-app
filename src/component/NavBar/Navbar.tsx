import React from "react";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <div className="navbar-parent">
      <ul>
        <li className="left">
          <a href="default.asp">DanMov</a>
        </li>
        <div className="right">
          <li className="">
            <a href="news.asp">Home</a>
          </li>
          <li className="">
            <a href="contact.asp">Favorite</a>
          </li>
          <li className="">
            <a href="about.asp">Genre</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
