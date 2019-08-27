import React, { Component } from "react";
import "./Banner.css";
export default class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Main-Banner">
          <div className="Banner">
            <div className="crossbg">
              <i className="far fa-window-close"></i>
            </div>
            <div>
              <h1 className="B-Text">Come code with us.</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
