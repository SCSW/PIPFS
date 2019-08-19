import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="first-content-footer">
          <h4 className="footer-small-title">About Us</h4>
          <h5 className="f-footer-about">
            We provide creative solutions to clients around the world, creating
            things that get attention and meaningful.
          </h5>
          <br />
          <h5 className="f-footer-about">
            Linux is a complex example of the wisdom of crowds. It's a good
            example in the sense that it shows you can set people to work in a
            decentralized way - that is, without anyone really directing their
            efforts in a particular direction - and still trust that they're
            going to come up with good answers.
          </h5>
        </div>
        <div className="second-content-footer">
          <h4 className="footer-small-title">Contact</h4>
          <NavLink className="footer-list">
            <h5>here</h5>
          </NavLink>
          <NavLink className="footer-list">
            <h5>here</h5>
          </NavLink>
          <NavLink className="footer-list">
            <h5>here</h5>
          </NavLink>
          <NavLink className="footer-list">
            <h5>here</h5>
          </NavLink>
        </div>
        <div className="third-content-footer">
          <h4 className="footer-small-title">PartnerShip</h4>
          <NavLink className="footer-list">
            <h5>Koompi</h5>
          </NavLink>
          <NavLink className="footer-list">
            <h5>Zeetomic</h5>
          </NavLink>
        </div>
        <div className="copy-right">
          Copyright 2019 &copy; SmallWorld Venture
        </div>
      </footer>
    );
  }
}
export default Footer;
