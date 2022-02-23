import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div id="content-banner">
        <h1 className="title-banner">Frozen 2</h1>
        <p className="genre-banner">Drama/Fantasy</p>
        <p className="desc-banner">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel numquam
          eum unde ad iste nemo ullam repellendus nulla incidunt magnam, dolor
          veritatis ut odio voluptatem, eligendi quod? Numquam, reprehenderit
          explicabo.
        </p>
        <p className="date-banner">Release date : 22 November 2019</p>
        <button className="button-banner">Lihat</button>
      </div>
      <img src={require("../../assets/banner.png")} />
    </div>
  );
};

export default Banner;
