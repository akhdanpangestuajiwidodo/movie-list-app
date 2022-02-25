import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./allmovie.css";
import { getOngoingMovie } from "../../service/ApiServices";

const AllMovie = () => {
  const [dataCard] = useState();

  useEffect(() => {
    getOngoingMovie(1);
  });

  // const listItems = dataCard.map((card) => <Card dataCard={card} />);
  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      {/* {listItems} */}
    </div>
  );
};

export default AllMovie;
