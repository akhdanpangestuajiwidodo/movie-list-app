import "./detail.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { from }: any = location.state;
  console.log(from.title);
  return (
    <div className="container-parent">
      <div className="container-detail">
        <img src={from.gambar} alt="" className="img-detail" />
        <div id="content-detail">
          <h1 className="title-detail">{from.title}</h1>
          <p className="genre-detail">Drama/Fantasy</p>
          <p className="desc-detail">{from.desc}</p>
          <p className="date-detail">Release date : 22 November 2019</p>
          <Link to={"/"}>
            <button className="button-detail">Kembali</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
