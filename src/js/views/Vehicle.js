import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./Planets";

export function Vehicle() {
	const params = useParams();
	const { data } = useSWR("/api/vehicles/" + params.id, starWarsApiFetch);
	const images = {
		"4":
			"https://media.sketchfab.com/models/e4d21d60eaf24e1faed8a1f09a964cf9/thumbnails/76ce647412fa473c91d3aa0c0315fa5b/3353e1f825a847789ac115050aa832b3.jpeg",
		"7":
			"https://media.sketchfab.com/models/onFuO5FwlAFGbxO8dhOCG5wKICh/thumbnails/3cea8a98d4d740d2af5aea9a9cb6e408/96dc5a6fca1443208cad25afcfd89d34.jpeg",
		"6": "https://cdn.shopify.com/s/files/1/2182/7899/products/T-16_3_1050x1050.jpg?v=1608309577",
		"8": "https://swglegends.com/wiki/images/thumb/7/7a/TIE_Fighter.JPG/250px-TIE_Fighter.JPG",
		"14":
			"https://media.gamestop.com/i/gamestop/11100712_ALT05/Hasbro-Star-Wars-Episode-V-The-Empire-Strikes-Back-40th-Anniversary-Snowspeeder-6-in-Action-Figure?$pdp$",
		"18": "https://i.pinimg.com/originals/27/a3/9f/27a39f0d67891fbdef472a13327952a0.jpg",
		"16":
			"https://static.wikia.nocookie.net/battlefront/images/8/8b/Tie-bomber-hero-sm.jpg/revision/latest?cb=20170824161455",
		"19": "https://lumiere-a.akamaihd.net/v1/images/AT-ST-gallery-1_85c9da66.jpeg?region=258%2C24%2C751%2C422",
		"20": "https://i.pinimg.com/736x/71/b8/26/71b8262fa8e6e4814e2dd114b1457f56--pod-clouds.jpg",
		"24":
			"https://sportshub.cbsistatic.com/i/2021/03/16/8e5bb834-907e-4d23-b437-800415c74679/star-wars-hasbro-jabbas-sail-barge-haslab-1096980.jpg"
	};
	return (
		<div className="row">
			<div className="col">
				{data && data.result.properties.name == "Sand Crawler" ? (
					<img className="characterImg" src={images[4]} />
				) : null}
				{data && data.result.properties.name == "X-34 landspeeder" ? (
					<img className="characterImg" src={images[7]} />
				) : null}
				{data && data.result.properties.name == "T-16 skyhopper" ? (
					<img className="characterImg" src={images[6]} />
				) : null}
				{data && data.result.properties.name == "TIE/LN starfighter" ? (
					<img className="characterImg" src={images[8]} />
				) : null}
				{data && data.result.properties.name == "Snowspeeder" ? (
					<img className="characterImg" src={images[14]} />
				) : null}
				{data && data.result.properties.name == "AT-AT" ? (
					<img className="characterImg" src={images[18]} />
				) : null}
				{data && data.result.properties.name == "TIE bomber" ? (
					<img className="characterImg" src={images[16]} />
				) : null}
				{data && data.result.properties.name == "AT-ST" ? (
					<img className="characterImg" src={images[19]} />
				) : null}
				{data && data.result.properties.name == "Storm IV Twin-Pod cloud car" ? (
					<img className="characterImg" src={images[20]} />
				) : null}
				{data && data.result.properties.name == "Sail barge" ? (
					<img className="characterImg" src={images[24]} />
				) : null}
			</div>
			<div className="col">
				<h1 className="charcaterH1">{data && data.result.properties.name}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}
