import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../Card/Card";
import "./allmovie.css";
import { getOngoingMovie } from "../../service/ApiServices";
import InfiniteScroll from "react-infinite-scroll-component";

const AllMovie = () => {
  //Handle Data Movie
  const [dataMovie, setDataMovie] = useState([]);

  //Handle Page Movie
  const [pageMovie, setPageMovie] = useState(1);

  //Handle Page Movie
  const [totalPage, setTotalPage] = useState(57);

  // //Handle scroll
  // const [statusScroll, setStatusCroll] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.screenY;
    console.log("if", currentScrollY);
  };

  const handleScroll2 = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    // console.log("wb1", window.innerHeight + document.documentElement.scrollTop);
    // console.log("wb2", document.documentElement.offsetHeight * 1);
    // console.log("WB", windowBottom);
    // console.log("DH", docHeight);
    if (windowBottom + 1 >= docHeight) {
      setPageMovie(pageMovie + 1);
      console.log(pageMovie);
      if (pageMovie <= totalPage) {
        // console.log("page movie", pageMovie);
        // setStatusCroll(true);
        getMovie(pageMovie);
      }
    }
  };

  useEffect(() => {
    getMovie(pageMovie);
    // window.addEventListener("scroll", handleScroll, { passive: true });
  }, [pageMovie]);

  //Use effect scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);

  const getMovie = (pageMovie: any) => {
    console.log(pageMovie);
    return getOngoingMovie(pageMovie)
      .then((result) => {
        if (result.statusCode === 200) {
          setTotalPage(result.dataMovie.totalPage);
          setDataMovie(result.dataMovie.results);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        // setStatusCroll(false);
      });
  };

  let elementsCard = dataMovie.map((abc) => <Card dataMovie={abc} />);

  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      <InfiniteScroll
        dataLength={dataMovie.length}
        next={() => setPageMovie(pageMovie + 1)}
        hasMore={true}
        loader={<div>Loading...</div>}
      >
        {elementsCard}
      </InfiniteScroll>
    </div>
  );
};

export default AllMovie;
