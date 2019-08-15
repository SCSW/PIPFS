import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
					<div className="menu">
						<NavLink className="menu-item" to="/">
							Home
						</NavLink>
						<NavLink className="menu-item" to="/">
							contact
						</NavLink>
						<NavLink className="menu-item" to="/">
							about
						</NavLink>
						<NavLink className="menu-item" to="/LogIn">
							log in
						</NavLink>
					</div>
					<NavLink className="h-ham">
						<i className="fas fa-bars" />
					</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Header;
