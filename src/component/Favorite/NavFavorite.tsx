import React from "react";
import "./navfavorite.css";
import { Link } from "react-router-dom";

const NavFavorite = () => {
  return (
    <div className="navfavorite-parent">
      <ul>
        <Link to={"/"}>
          <li className="navfavorite-left">
            <a href="default.asp">Kembali</a>
          </li>
        </Link>

        <div className="navfavorite-right">
          <li className="">
            <a href="news.asp">Favorite Movie</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavFavorite;
