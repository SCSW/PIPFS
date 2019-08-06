// import React, { Component } from "react";
// import { Switch, Route, NavLink, Link } from "react-router-dom";
// export default class Register extends Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<div className="container">
// 					<div className="content">
// 						<h1>Create Account</h1>
// 						<input type="username" placeholder="Username" />
// 						<input type="email" placeholder="Email" />
// 						<input type="password" placeholder="Password" />
// 						<button>Create</button>
// 						<div className="re-box">
// 							<h5>Already have an account?</h5>
// 							<a href="">Log In</a>
// 						</div>
// 					</div>
// 				</div>
// 			</React.Fragment>
// 		);
// 	}
// }
import React from "react";
import { Link } from "react-router-dom";
import("./Register.css");

const Register = () => {
	return (
		<React.Fragment>
			<div className="r-container">
				<center>
					<div className="r-content">
						<h1>Create Account</h1>
						<input
							className="r-form"
							type="username"
							placeholder="Username"
						/>
						<input className="r-form" type="email" placeholder="Email" />
						<input
							className="r-form"
							type="password"
							placeholder="Password"
						/>
						<button className="r-button">Create</button>
						<div className="r-re-box">
							<h5>Already have an account?</h5>
							<Link className="link" to="/LogIn">
								Log In
							</Link>
						</div>
					</div>
				</center>
			</div>
		</React.Fragment>
	);
};

export default Register;
