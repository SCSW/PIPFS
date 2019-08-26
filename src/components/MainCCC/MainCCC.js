import React, { Component } from "react";
import Content from "./Content/Content";
import CoinMarketplace from "./CoinMarketplace/CoinMarketplace";
import Catergory from "./Catergory/Catergory";
import "./MainCCC.css";

export default class MainCCC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mccc">
          <Catergory></Catergory>
          <Content></Content>
          <CoinMarketplace />
        </div>
      </React.Fragment>
    );
  }
}
