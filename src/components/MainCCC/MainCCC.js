import React, { Component } from "react";
import Content from "./Content/Content";
import CoinMarketplace from "./CoinMarketplace/CoinMarketplace";
import Catergory from "./Catergory/Catergory";
import MMenu from "./MMenu/MMenu";
import "./MainCCC.css";

export default class MainCCC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mmccc">
          {/* <MMenu /> */}
          <div className="mccc">
            <Catergory />
            <Content />
            <CoinMarketplace />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
