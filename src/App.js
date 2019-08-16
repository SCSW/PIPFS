import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import LogIn from "./components/Login/LogIn";
import React, { Component } from "react";

export class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/About" component={About} />
					<Route exact path="/Register" component={Register} />
					<Route exact path="/Login" component={LogIn} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;

// function App() {
// 	return (
// 		<React.Fragment>
// 			<Switch>
// 				<Route exact path="/" component={Home} />
// 				<Route exact path="/Register" component={Register} />
// 				<Route exact path="/Login" component={LogIn} />
// 			</Switch>
// 		</React.Fragment>
// 	);
// }
// export default App;
