import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<React.Fragment>
			<div className="container">
				<Link>
					<div className="column-left" to="/">
						PIPFS
					</div>
				</Link>
				<div className="column-center">
					<Link className="a" to="/">
						Trending
					</Link>
					<Link className="a" to="/">
						News
					</Link>
					<Link className="a" to="/">
						Tops
					</Link>
				</div>
				<div className="column-right">
					<nav className="rmenu">
						<Link className="a" to="/LogIn">
							LogIn
						</Link>
						<Link className="a" to="/Register">
							Sign Up
						</Link>
						<Link className="a" to="/">
							Menu
						</Link>
					</nav>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Header;
