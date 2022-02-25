import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./allmovie.css";
import { getOngoingMovie } from "../../service/ApiServices";

interface GetMovie {
  dates: any;
  page: any;
  results: any;
  total_pages: any;
  total_results: any;
}

const defaultPosts: GetMovie[] = [];

const AllMovie = () => {
  //Handle Data Movie
  const [dataMovie, setDataMovie] = useState([]);

  //Handle Page Movie
  const [pageMovie, setPageMovie] = useState(1);

  useEffect(() => {
    getMovie(pageMovie);
  }, []);

  const getMovie = (pageMovie: any) => {
    return getOngoingMovie(pageMovie)
      .then((result) => {
        setDataMovie(result.dataMovie.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  let elements = dataMovie.map((abc) => <Card dataMovie={abc} />);

  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      {elements}
    </div>
  );
};

export default AllMovie;
