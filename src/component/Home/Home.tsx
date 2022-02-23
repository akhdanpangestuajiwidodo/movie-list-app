import React from "react";
import NavBar from "../NavBar/Navbar";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import AllMovie from "../AllMovie/AllMovie";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AllMovie />
    </div>
  );
};

export default Home;
