import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="padding-card">
        <img
          src={require("../../assets/img_avatar.png")}
          className="img-card"
        />
        <div className="container">
          <h4>Judul</h4>
          <p>Genre</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
