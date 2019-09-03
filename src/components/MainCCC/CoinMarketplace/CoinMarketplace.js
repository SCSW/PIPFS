import React, { Component } from "react";
import "./CoinMarketplace.css";
export default class CoinMarketplace extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="coinmarketplace">
          <div className="sccc-box">
            <h3 className="scccbt">Coin Marketplace</h3>
            <div className="sccc-graph">
              <div className="coin-title">Steem Coin</div>
              <div className="coin-graph"></div>
            </div>
            <div className="sccc-graph">
              <div className="coin-title">Bitcoin</div>
              <div className="coin-graph"></div>
            </div>
            <div className="sccc-graph">
              <div className="coin-title">Ethereum</div>
              <div className="coin-graph"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
