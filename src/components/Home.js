import React, { Component } from "react";
import AnimateBar from "./AnimateBar/AnimateBar";
import Header from "./Header/Header";
import MainCCC from "./MainCCC/MainCCC";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <AnimateBar />
        <Header />
        {/* <Banner /> */}
        <MainCCC />
      </React.Fragment>
    );
  }
}

export default Home;
