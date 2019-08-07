import "./LogIn.css";
import React, { Component } from "react";

export class LogIn extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="l-container">
					<center>
						<div className="l-content">
							<h1>Welcome to the Community</h1>
							<input
								className="l-form"
								type="email"
								placeholder="Email"
							/>
							<input
								className="l-form"
								type="password"
								placeholder="Password"
							/>
							<a href="">Forget your password?</a>
							<button className="l-button">Sign In</button>
						</div>
					</center>
				</div>
			</React.Fragment>
		);
	}
}

export default LogIn;
