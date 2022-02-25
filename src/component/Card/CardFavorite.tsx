import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";

const CardFavorite = (props: any) => {
  return (
    <Link to={"/detail"} state={{ from: props.dataCard }}>
      <div className="card">
        <div className="padding-card">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.dataMovie.poster_path}`}
            className="img-card"
            alt=""
          />
          <div className="container">
            <h4>Judul</h4>
            <p>Genre</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardFavorite;
