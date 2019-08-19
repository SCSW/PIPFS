import React, { Component } from "react";
import "./BGImage.css";

export class BGImage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg">
          <div className="bg-image" />
          <h1 className="bg-text">Come code with us.</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default BGImage;
