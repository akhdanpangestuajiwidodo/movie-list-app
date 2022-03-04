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

  //Handle scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;

      const windowBottom = windowHeight + window.pageYOffset;
      setScrollPosition(window.scrollY);
      if (document.body.scrollHeight <= windowBottom) {
        if (pageMovie + 1 < totalPage) {
          setPageMovie(pageMovie + 1);
        }
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [pageMovie]);

  useEffect(() => {
    async function getMovie() {
      const data = await getOngoingMovie(pageMovie);
      const listDataMovie: any = dataMovie;
      for (const iterator of data.dataMovie.results) {
        listDataMovie.push(iterator);
      }
      setDataMovie(listDataMovie);
    }
    getMovie();
  }, [pageMovie]);

  // const handleScroll2 = () => {
  //   const windowHeight =
  //     "innerHeight" in window
  //       ? window.innerHeight
  //       : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );
  //   const windowBottom = windowHeight + window.pageYOffset;
  //   // console.log("wb1", window.innerHeight + document.documentElement.scrollTop);
  //   // console.log("wb2", document.documentElement.offsetHeight * 1);
  //   // console.log("WB", windowBottom);
  //   // console.log("DH", docHeight);
  //   if (windowBottom >= docHeight) {
  //     setPageMovie(pageMovie + 1);
  //     console.log(pageMovie);
  //     if (pageMovie <= totalPage) {
  //       // console.log("page movie", pageMovie);
  //       // setStatusCroll(true);
  //       getMovie(pageMovie);
  //     }
  //   }
  // };

  useEffect(() => {
    // getMovie(pageMovie);
    async function getMovie() {
      const data = await getOngoingMovie(pageMovie);
      setDataMovie(data.dataMovie.results);
    }

    getMovie();
  }, []);

  // //Use effect scroll
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll2);
  //   return () => window.removeEventListener("scroll", handleScroll2);
  // }, []);

  // const getMovie = (pageMovie: any) => {
  //   return getOngoingMovie(pageMovie)
  //     .then((result) => {
  //       if (result.statusCode === 200) {
  //         const listDataMovie: any = dataMovie;
  //         for (const iterator of result.dataMovie.results) {
  //           listDataMovie.push(iterator);
  //         }
  //         console.log(listDataMovie);
  //         setDataMovie(listDataMovie);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error: ", error);
  //     });
  // };

  let elementsCard = dataMovie.map((abc) => <Card dataMovie={abc} />);

  return (
    <div className="allmovie-container">
      <p className="title-allmovie">Recommended Movies</p>
      {elementsCard}
    </div>
  );
};

export default AllMovie;
