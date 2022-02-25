import "./detail.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const result: string[] = [];

export default function Detail() {
  const location = useLocation();
  const { from }: any = location.state;

  //Default value get from cookies
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState(result);
  const [statusFavorite, setStatusFavorite] = useState(false);

  useEffect(() => {
    getFavoriteMovies();
    searchFavoriteMovies();
  }, []);

  const getFavoriteMovies = () => {
    let cookies = Cookies.get("favoriteMovies");
    if (cookies == undefined) {
      return [];
    } else {
      setDataFavoriteMovie(JSON.parse(Cookies.get("favoriteMovies") as string));
    }
  };

  const searchFavoriteMovies = () => {
    dataFavoriteMovie.forEach((dataLama) => {
      if (dataLama == from) {
        setStatusFavorite(true);
      }
    });
  };

  const addFavorite = (dataInput: any) => {
    let data = [...dataFavoriteMovie];

    if (statusFavorite == true) {
      alert("Sudah Ditambah");
      return false;
    } else {
      data.push(dataInput);
      setDataFavoriteMovie(data);
      setStatusFavorite(true);
      Cookies.set("favoriteMovies", JSON.stringify(data));
    }
  };

  return (
    <div className="container-parent">
      <div className="container-detail">
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${from.poster_path}`}
          alt=""
          className="img-detail"
        />
        <div id="content-detail">
          <h1 className="title-detail">{from.original_title}</h1>
          <p className="genre-detail">{`Vote Average : ${from.vote_average}`}</p>
          <p className="desc-detail">{from.overview}</p>
          <p className="date-detail">{`Release Date : ${from.release_date}`}</p>
          <Link to={"/"}>
            <button className="button-detail">Kembali</button>
          </Link>
          {statusFavorite == false ? (
            <button
              className="button-addFavorite"
              onClick={() => addFavorite(from)}
            >
              Tambah Favorite
            </button>
          ) : (
            <button
              style={{ backgroundColor: "red" }}
              className="button-addFavorite"
              onClick={() => addFavorite(from)}
            >
              Sudah Ditambahkan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
