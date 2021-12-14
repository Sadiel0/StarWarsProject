import React from "react";
import useSWR from "swr";
import { Planet } from "../views/Planet";
import { useFavorites } from "../store/favorite";
import "../../styles/index.scss";
export async function starWarsApiFetch(path) {
	const response = await fetch("https://www.swapi.tech" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

const images = {
	"1": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg",
	"2": "https://i.pinimg.com/originals/41/01/06/410106222d0a5d7f031e2a61be4b72a1.jpg",
	"3": "https://pm1.narvii.com/5948/824950433520622883d50de882148a1e4450487c_hq.jpg",
	"4":
		"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/010b592d-59bc-484c-a16f-b571ecf5927b/d2oz3bd-a2e18691-501a-4b3b-ae65-f72eda097b1f.jpg/v1/fill/w_900,h_563,q_75,strp/planet_hoth_by_oscarmiranda90_d2oz3bd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvMDEwYjU5MmQtNTliYy00ODRjLWExNmYtYjU3MWVjZjU5MjdiXC9kMm96M2JkLWEyZTE4NjkxLTUwMWEtNGIzYi1hZTY1LWY3MmVkYTA5N2IxZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pvNdm9c8OaVOrXikwDOtZ1ZLfXT2CZ9tLO89WlxHbBE",
	"5":
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSythcNZsL9uAZuMmaqmTrnHzeeCIR34F63X-rd0gP24MpOkWyrtWC-e97DWxoXeMYWA&usqp=CAU",
	"6": "https://i.pinimg.com/originals/bb/03/ff/bb03ffb68e21b8a7b880c6fbdb32a7bb.jpg",
	"7":
		"https://external-preview.redd.it/5rlHhTBGyLgE2hBKzyrg4C57vS8LhpGCV-bqGk1HgJE.jpg?auto=webp&s=aa1e6ea446f770b592f9cb5be16ce832ed9dd10a",
	"8": "https://eaw.heavengames.com/cpix/planets/naboo.png",
	"9": "https://img1.cgtrader.com/items/3032180/4aa4bd0521/large/coruscant-star-wars-planet-texture-3d-model.jpg",
	"10": "http://pm1.narvii.com/7547/e115c3c85ecf29138d71a7639735966ae756b539r1-528-322v2_00.jpg"
};

export function Planets() {
	const { data, isValidating } = useSWR("/api/planets", starWarsApiFetch);
	const favorites = useFavorites();
	return (
		<div className="planet-row">
			<h1>These Are the Planets</h1>
			<div className="row">
				{data &&
					data.results.map((item, index) => {
						return (
							<div className="card" key={index}>
								<a href={"/planet/" + item.uid}>
									<img src={images[item.uid] || null} className="card-img-top" alt="..." />
								</a>

								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>

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
