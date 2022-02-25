import React, { useEffect, useState } from "react";
import "./favorite.css";
import Card from "../Card/Card";
import NavFavorite from "./NavFavorite";
import Cookies from "js-cookie";

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  const getFavoriteMovies = () => {
    let cookies = Cookies.get("favoriteMovies");
    if (cookies == undefined) {
      return [];
    } else {
      setFavoriteMovies(JSON.parse(Cookies.get("favoriteMovies") as string));
    }
  };

  let elements = favoriteMovies.map((abc) => <Card dataMovie={abc} />);
  return (
    <div className="favorite-container">
      <NavFavorite />
      <div className="body-favorite">{elements}</div>
    </div>
  );
};

export default Favorite;
