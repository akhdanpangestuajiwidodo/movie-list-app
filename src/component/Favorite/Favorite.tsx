import React, { useState } from "react";
import "./favorite.css";
import CardFavorite from "../Card/CardFavorite";
import NavFavorite from "./NavFavorite";

const Favorite = (props: any) => {
  //   console.log(props.dataFavoriteMovie.title);

  return (
    <div className="favorite-container">
      <NavFavorite />
      <div className="body-favorite">
        <CardFavorite />
      </div>
    </div>
  );
};

export default Favorite;
