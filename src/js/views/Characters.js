import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./Planets";
import { useParams } from "react-router-dom";
import "../../styles/index.css";
// import { Character } from "./Character";
import { useFavorites } from "../store/favorite";

export function Characters() {
	const { data, isValidating } = useSWR("/api/people/", starWarsApiFetch);
	const favorites = useFavorites();
	const images = {
		"1":
			"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
		"2":
			"https://lumiere-a.akamaihd.net/v1/images/6023eab8d941ed00018d113f-image_6f532508.jpeg?region=0%2C48%2C1536%2C768&width=960",
		"3":
			"https://www.lego.com/cdn/cs/set/assets/blt5dcfc02db6deb559/SW-Sidekick-Standard-r2d2.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1",
		"4":
			"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&aspectRatio=1.78&format=jpeg",
		"5": "http://pm1.narvii.com/6224/a2dfd0cd0eccb104070efb3e8fad451f23643531_00.jpg",
		"6": "https://s3.amazonaws.com/comicgeeks/characters/avatars/11203.jpg?t=1632391945",
		"7": "http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg",
		"8":
			"https://1.bp.blogspot.com/-iGPvHwoNdYI/WSjldmO_DMI/AAAAAAAAcQc/s8Ni9i9zBXg8K0GuHt9Tngb6_mVqCr5BgCEw/s1600/IMG_1722.JPG",
		"9": "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
		"10": "https://www.nme.com/wp-content/uploads/2020/12/Kenobi.jpg"
	};
	return (
		<div className="">
			<h1>Characters</h1>
			<div className="row">
				{data
					? data.results.map((item, index) => {
							return (
								<div className="card" key={index}>
									<a href={"/people/" + item.uid + "/" + item.name}>
										<img src={images[item.uid] || null} className="card-img-top" alt="..." />
									</a>

									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										{/* <ul className="attributes">
											Gender: {item.gender}
											<br />
											HairColor:
											{item.hair_color}
											<br />
											EyeColor:
											{item.eye_color}
										</ul> */}
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
					  })
					: "No data"}
			</div>
		</div>
	);
}
