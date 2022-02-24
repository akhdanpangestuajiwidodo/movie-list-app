import React, { useState } from "react";
import Card from "../Card/Card";
import "./allmovie.css";

const AllMovie = () => {
  const [dataCard] = useState([
    {
      title: "Title 1",
      desc: "Desc 1",
      gambar: "../../assets/banner.png",
    },
    {
      title: "Title 2",
      desc: "Desc 2",
      gambar: "../../assets/img_avatar.png",
    },
    {
      title: "Title 3",
      desc: "Desc 3",
      gambar: "../../assets/img_avatar.png",
    },
    {
      title: "Title 4",
      desc: "Desc 4",
      gambar: "../../assets/img_avatar.png",
    },
    {
      title: "Title 5",
      desc: "Desc 5",
      gambar: "../../assets/img_avatar.png",
    },
  ]);

  const listItems = dataCard.map((card) => <Card dataCard={card} />);
  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      {listItems}
    </div>
  );
};

export default AllMovie;
