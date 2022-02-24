import React from "react";
import "./favorite.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import NavFavorite from "./NavFavorite";

const Favorite = () => {
  return (
    <div className="favorite-container">
      <NavFavorite />
      <div className="body-favorite">
        <Card />
      </div>
    </div>
  );
};

export default Favorite;
