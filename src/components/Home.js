import React, { Component } from "react";
import AnimateBar from "./AnimateBar/AnimateBar";
import Header from "./Header/Header";
import BGImage from "./BGImage/BGImage";
import MainCCC from "./MainCCC/MainCCC";
import Footer from "./Footer/Footer";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <AnimateBar />
        <Header />
        <BGImage />
        <MainCCC />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
