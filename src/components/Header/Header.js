import React, { Component } from "react";
import Logo from "./logos.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<center className="logo">
						<img className="h-logo" src={Logo} alt="" />
					</center>
					<center>
						<div className="n-search">
							<input
								className="n-search-box"
								type="search"
								placeholder="Search"
							/>
							<div className="search-icon">
								<i className="fas fa-search" />
							</div>
						</div>
					</center>
					<div className="h-menu">
						<div className="menu">
							<NavLink to="/About" className="menu-item">
								home
							</NavLink>
							<NavLink to="/About" className="menu-item">
								contact
							</NavLink>
							<NavLink to="/About" className="menu-item">
								about us
							</NavLink>
							<NavLink to="/LogIn" className="menu-item">
								log in
							</NavLink>
							<NavLink to="/Register" className="menu-item">
								sign up
							</NavLink>
						</div>

						<div className="h-ham">
							<i className="fas fa-bars" />
						</div>
					</div>
				</div>
				<div className="hide-right-menu">
					<div className="h-right-menu">
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
