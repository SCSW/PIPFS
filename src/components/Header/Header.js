import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<center>
						<div className="logo">PIPFS</div>
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
						<NavLink className="h-ham">
							<i className="fas fa-bars" />
						</NavLink>
						<div className="menu">
							<NavLink className="menu-item" to="/">
								Home
							</NavLink>
							<NavLink className="menu-item" to="/">
								contact
							</NavLink>
							<NavLink className="menu-item" to="/About">
								about us
							</NavLink>
							<NavLink className="menu-item" to="/LogIn">
								log in
							</NavLink>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Header;
