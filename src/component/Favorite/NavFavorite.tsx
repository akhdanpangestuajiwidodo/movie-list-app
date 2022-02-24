import React from "react";
import "./navfavorite.css";

const NavFavorite = () => {
  return (
    <div className="navfavorite-parent">
      <ul>
        <li className="navfavorite-left">
          <a href="default.asp">Kembali</a>
        </li>
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
