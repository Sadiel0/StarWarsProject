import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./Planets";
import { Vehicle } from "../views/Vehicle";
import { useFavorites } from "../store/favorite";
// import "../../styles/index.scss";

export function Vehicles() {
	const { data, isValidating } = useSWR("/api/vehicles/", starWarsApiFetch);
	const favorites = useFavorites();
	const images = {
		"4":
			"https://media.sketchfab.com/models/e4d21d60eaf24e1faed8a1f09a964cf9/thumbnails/76ce647412fa473c91d3aa0c0315fa5b/3353e1f825a847789ac115050aa832b3.jpeg",
		"7":
			"https://media.sketchfab.com/models/onFuO5FwlAFGbxO8dhOCG5wKICh/thumbnails/3cea8a98d4d740d2af5aea9a9cb6e408/96dc5a6fca1443208cad25afcfd89d34.jpeg",
		"6": "https://cdn.shopify.com/s/files/1/2182/7899/products/T-16_3_1050x1050.jpg?v=1608309577",
		"8": "https://www.gamesatlas.com/images/star-wars/squadrons/ships/starfighters-imperial-tie-fighter.jpg",
		"14":
			"https://media.gamestop.com/i/gamestop/11100712_ALT05/Hasbro-Star-Wars-Episode-V-The-Empire-Strikes-Back-40th-Anniversary-Snowspeeder-6-in-Action-Figure?$pdp$",
		"18": "https://i.pinimg.com/originals/27/a3/9f/27a39f0d67891fbdef472a13327952a0.jpg",
		"16":
			"https://static.wikia.nocookie.net/starwarsrebels/images/1/11/Homecoming_Rebels_35.jpeg/revision/latest?cb=20160218012655",
		"19": "https://lumiere-a.akamaihd.net/v1/images/AT-ST-gallery-1_85c9da66.jpeg?region=258%2C24%2C751%2C422",
		"20": "https://i.pinimg.com/736x/71/b8/26/71b8262fa8e6e4814e2dd114b1457f56--pod-clouds.jpg",
		"24":
			"https://sportshub.cbsistatic.com/i/2021/03/16/8e5bb834-907e-4d23-b437-800415c74679/star-wars-hasbro-jabbas-sail-barge-haslab-1096980.jpg"
	};
	return (
		<div className="">
			<h1>These Are the Vehicles</h1>
			<div className="row">
				{data &&
					data.results.map((item, index) => {
						return (
							<div className="card" key={index}>
								<a href={"/vehicles/" + item.uid}>
									<img src={images[item.uid] || null} className="card-img-top" alt="..." />
								</a>

								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<ul className="attributes">
										{/* Gender: {item.gender}
									<br />
									HairColor:
									{item.hair_color}
									<br />
									EyeColor:
									{item.eye_color} */}
									</ul>

									<div className="btn">
										{favorites.favorites.some(fav => {
											return fav.uid === item.uid;
										}) ? (
											<button
												className=""
												onClick={() => {
													favorites.removeFavorite(item);
												}}>
												Remove favorite
											</button>
										) : (
											<button
												className=""
												onClick={() => {
													favorites.addFavorite(item);
												}}>
												Favorite
												<i className="far fa-heart" />
											</button>
										)}
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
