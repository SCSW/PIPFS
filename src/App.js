import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from "./components/Home";
import Register from "./components/Register/Register";
import LogIn from "./components/Login/LogIn";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Register} />
				<Route exact path="/Login" component={LogIn} />
			</Switch>
		</React.Fragment>
	);
}
export default App;

// export class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<Home />
// 			</div>
// 		);
// 	}
// }
// export default App;

// import React, { Component } from "react";
// import { Switch, Route, NavLink, Link } from "react-router-dom";

// export default class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<nav>
// 					<NavLink exact to="/" activeStyle={{ color: "red" }}>
// 						Home
// 					</NavLink>
// 					<NavLink exact to="/about" activeStyle={{ color: "red" }}>
// 						About
// 					</NavLink>
// 				</nav>
// 				<Switch>
// 					<Route exact path="/" render={() => <div>Home</div>} />
// 					<Route exact path="/about" render={() => <div>About</div>} />
// 					<Route exact path="/asdfasd" component={Componentname} />
// 				</Switch>
// 				<footer />
// 			</div>
// 		);
// 	}
// }
