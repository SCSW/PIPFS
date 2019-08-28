import React, { Component } from "react";
import Logo from "./logos.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="h-left">
            <div className="logo">
              <NavLink to="/">
                <img className="h-logo" src={Logo} alt="logo" />
              </NavLink>
            </div>
          </div>
          <div className="h-center">
            <div className="n-search">
              <input
                className="n-search-box"
                type="search"
                placeholder="Search"
              />
              <i className="fas fa-search" />
            </div>
          </div>

          <div className="h-left">
            <div className="h-ham">
              <i className="fas fa-bars"></i>
            </div>
            <div className="menu">
              <NavLink to="/" className="menu-item">
                home
              </NavLink>
              <NavLink to="/Contact" className="menu-item">
                contact
              </NavLink>
              <NavLink to="/About" className="menu-item">
                about us
              </NavLink>
              <NavLink to="/LogIn" className="menu-item1">
                log in
              </NavLink>
              <NavLink to="/Register" className="menu-item1">
                sign up
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hide-right-menu">
          <div className="h-right-menu">
            <div className="h-close">
              <i className="fas fa-times" />
            </div>
            <NavLink className="menu-item" to="/">
              home
            </NavLink>
            <NavLink className="menu-item" to="/">
              contact
            </NavLink>
            <NavLink className="menu-item" to="/About">
              about us
            </NavLink>
            <NavLink to="/LogIn" className="menu-item">
              log in
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
