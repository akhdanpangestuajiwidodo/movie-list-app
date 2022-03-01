import "./detail.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const result: any[] = [];

export default function Detail() {
  const location = useLocation();
  const { from }: any = location.state;

  //Use State data favorite image
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState(result);

  //Use state for change button add favorite
  const [statusIsFavorite, setStatusFavorite] = useState(false);

  const getFavoriteMovies = () => {
    let cookies = Cookies.get("favoriteMovies");
    if (cookies === undefined) {
      return [];
    } else {
      let dataBaru = JSON.parse(cookies as string);
      setDataFavoriteMovie(dataBaru);
    }
  };

  // const checkMovie = () => {
  //   let data = [...dataFavoriteMovie];
  //   console.log("Data Baruuu", data);
  //   setTimeout(() => {
  //     data.forEach((movie) => {
  //       console.log("Data Movie Bos", movie.id);
  //       if (movie.id === from.id) {
  //         console.log("Masuk");
  //         setStatusFavorite(true);
  //       }
  //     });
  //   }, 3000);
  // };

  useEffect(() => {
    getFavoriteMovies();
    console.log("Terpanggil");
    dataFavoriteMovie.forEach((element) => {
      if (element.id === from.id) {
        setStatusFavorite(true);
      }
    });
  }, [dataFavoriteMovie.length]);

  const addFavorite = (dataInput: any) => {
    let data = [...dataFavoriteMovie];

    if (statusIsFavorite === true) {
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

          {statusIsFavorite === false ? (
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
