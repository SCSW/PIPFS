import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import("./Register.css");

export class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			username: ""
		};
	}

	register1 = async () => {
		axios
			.post("http://localhost:3001/register", {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			})
			.then((res, err) => {
				console.log(res);
				//alert('Create successful');
			});
	};
	render() {
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
								onChange={e =>
									this.setState({ username: e.target.value })
								}
							/>
							<input
								className="r-form"
								type="email"
								placeholder="Email"
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<input
								className="r-form"
								type="password"
								placeholder="Password"
								onChange={e =>
									this.setState({ password: e.target.value })
								}
							/>
							<button
								className="r-button"
								onClick={e => this.register1()}
							>
								Create
							</button>
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
	}
}

export default Register;
