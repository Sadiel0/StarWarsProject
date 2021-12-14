import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import { Vehicles } from "./Vehicles";
export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<br />
		<Planets />
		<br />
		<Vehicles />
	</div>
);
