import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () => {
  return (
    <Link to={"/detail"}>
      <div className="card">
        <div className="padding-card">
          <img
            src={require("../../assets/img_avatar.png")}
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

export default Card;
