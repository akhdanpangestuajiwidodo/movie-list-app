import "./detail.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <div className="container-parent">
      <div className="container-detail">
        <img
          src={require("../../assets/banner.png")}
          alt=""
          className="img-detail"
        />
        <div id="content-detail">
          <h1 className="title-detail">Frozen 2</h1>
          <p className="genre-detail">Drama/Fantasy</p>
          <p className="desc-detail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            numquam eum unde ad iste nemo ullam repellendus nulla incidunt
            magnam, dolor veritatis ut odio voluptatem, eligendi quod? Numquam,
            reprehenderit explicabo.
          </p>
          <p className="date-detail">Release date : 22 November 2019</p>
          <button className="button-detail">Kembali</button>
        </div>
      </div>
    </div>
  );
}
