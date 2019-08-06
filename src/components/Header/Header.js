import React, { Component } from "react";
import "./Header.css";

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="column-left">
						<div className="logo">PIPFS</div>
					</div>

					<div className="column-center">
						<nav className="cmenu">
							<ul>
								<li>
									<a>Trending</a>
								</li>
								<li>
									<a>Blogs</a>
								</li>
								<li>
									<a>Tops</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="column-right">
						<nav className="rmenu">
							<ul>
								<li>
									<a href="">Log In</a>
								</li>
								<li>
									<a href="">Sign Up</a>
								</li>
								<li>
									<a href="">Menu</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
