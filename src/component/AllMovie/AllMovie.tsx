import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./allmovie.css";
import { getOngoingMovie } from "../../service/ApiServices";

const AllMovie = () => {
  //Handle Data Movie
  const [dataMovie, setDataMovie] = useState([]);

  //Handle Page Movie
  const [pageMovie, setPageMovie] = useState(1);

  //Handle Error
  const [errorStatus, setErroStatus] = useState("");

  useEffect(() => {
    getOngoingMovie(pageMovie)
      .then((result) => {
        if (result.statusCode == 200) {
          setDataMovie(result.dataMovie);
        } else {
          throw new Error("False GET Data Movie");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        setErroStatus(error);
      });
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
