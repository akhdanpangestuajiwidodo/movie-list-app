import "./detail.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { from }: any = location.state;

  //Default value get from cookies
  const [dataFavoriteMovie, setDataFavoriteMovie] = useState([{}]);

  const addFavorite = (dataInput: any) => {
    let data = [...dataFavoriteMovie];
    data.push(dataInput);
    setDataFavoriteMovie(data);

    //sycn data to
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
          <button
            className="button-addFavorite"
            onClick={() => addFavorite(from)}
          >
            Tambah Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
