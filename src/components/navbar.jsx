import React from "react";

import Footer from "../pages/Footer";
import Cards from "../pages/Cards";
import Header from "../pages/Header";

import "../components/Navbarr.css";

const TopNavBar = () => {
  return (
    <div>
      <Header></Header>

      <br></br>

      <Cards></Cards>

      <br></br>

      <Footer></Footer>
    </div>
  );
};

export default TopNavBar;
