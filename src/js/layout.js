import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Planet } from "./views/Planet";
import { Planets } from "./views/Planets";
import { Vehicles } from "./views/Vehicles";

import { Character } from "./views/Character";
import { Characters } from "./views/Characters";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehicle } from "./views/Vehicle";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/vehicles/:id">
							<Vehicle />
						</Route>
						<Route exact path="/vehicles/">
							<Vehicles />
						</Route>
						<Route path="/people/:id/:name">
							<Character />
						</Route>
						<Route exact path="/people">
							<Characters />
						</Route>
						<Route exact path="/planet/:id">
							<Planet />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
