import React from "react";
import "./LogIn.css";
import axios from "axios";

export default class login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}
	login1 = async () => {
		axios
			.post("http://localhost:3001/login", {
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
				<div className="l-container">
					<center>
						<div className="l-content">
							<h1 className="l-welcome">Welcome to the Community</h1>
							<input
								className="l-form"
								type="email"
								placeholder="Email"
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<input
								className="l-form"
								type="password"
								placeholder="Password"
								onChange={e =>
									this.setState({ password: e.target.value })
								}
							/>
							<h3 className="forget">Forget your password ?</h3>
							<button className="l-button" onClick={e => this.login1()}>
								Sign In
							</button>
						</div>
					</center>
				</div>
			</React.Fragment>
		);
	}
}

// export default class LogIn extends Component {
// 	render() {
// 		return (
// <React.Fragment>
// 	<div className="container">
// 		<div className="content">
// 			<h1>Welcome to the Community</h1>
// 			<input type="email" placeholder="Email" />
// 			<input type="password" placeholder="Password" />
// 			<a href="">Forget your password?</a>
// 			<button>Sign In</button>
// 		</div>
// 	</div>
// </React.Fragment>
// 		);
// 	}
// }
