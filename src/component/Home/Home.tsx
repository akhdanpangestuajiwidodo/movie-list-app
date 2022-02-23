import React from "react";
import NavBar from "../NavBar/Navbar";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import AllMovie from "../AllMovie/AllMovie";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <AllMovie />
      <Footer />
    </div>
  );
};

export default Home;
