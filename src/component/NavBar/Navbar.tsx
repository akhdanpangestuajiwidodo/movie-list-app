import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <div className="navbar-parent">
      <ul className="ul-navbar">
        <li className="left">
          <a href="default.asp">DanMov</a>
        </li>
        <div className="right">
          <li className="">
            <a href="news.asp">Home</a>
          </li>
          <Link to={"/favorite"}>
            <li className="">
              <a href="contact.asp">Favorite</a>
            </li>
          </Link>
          <li className="">
            <a href="about.asp">Genre</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
