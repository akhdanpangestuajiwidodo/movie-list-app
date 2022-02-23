import React from "react";
import Card from "../Card/Card";
import "./allmovie.css";

const AllMovie = () => {
  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default AllMovie;
