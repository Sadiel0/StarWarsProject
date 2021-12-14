import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./Planets";
import "../../styles/character.scss";
export function Character() {
	const params = useParams();
	console.log(params);
	const { data } = useSWR("/api/people/" + params.id, starWarsApiFetch);
	//        <Route exact path="/people/:id/:name"></Route>
	const images = {
		"1":
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfcf177d-ad8e-4f4b-b3ea-17702e88b1e4/deayd3x-49dde783-cbf9-4395-96b5-6f5389beff2c.jpg/v1/fill/w_1280,h_2052,q_75,strp/the_mandalorian___luke_skywalker_and_grogu_by_wolverine103197_deayd3x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA1MiIsInBhdGgiOiJcL2ZcL2NmY2YxNzdkLWFkOGUtNGY0Yi1iM2VhLTE3NzAyZTg4YjFlNFwvZGVheWQzeC00OWRkZTc4My1jYmY5LTQzOTUtOTZiNS02ZjUzODliZWZmMmMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9AKcrg58tT7-OYWQ6DQPEbGFM_CGLfTmLhhDf7bfNro",
		"2": "https://www.geekalerts.com/u/C-3PO-Figure.jpg",
		"3": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=193%2C0%2C2000%2C1000",
		"4":
			"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&aspectRatio=1.78&format=jpeg",
		"5":
			"https://cdnb.artstation.com/p/assets/images/images/000/583/693/4k/tony-foti-6-leiaorgana-tonyfoti.jpg?1427523013",
		"6": "https://i.redd.it/f5sov3cb8zg51.jpg",
		"7":
			"https://static.wikia.nocookie.net/starwars/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20070625220148",
		"8":
			"https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg",
		"9":
			"https://static.wikia.nocookie.net/star-wars-canon-extended/images/c/c3/Big1.jpg/revision/latest/scale-to-width-down/383?cb=20180212073650",
		"10":
			"https://s.abcnews.com/images/Entertainment/ht_alec_guinness_obi_wan_kenobi_star_wars_jc_160415_4x3t_992.jpg"
	};

	return (
		<div className="row">
			<div className="col">
				{data && data.result.properties.name == "Luke Skywalker" ? (
					<img className="characterImg" src={images[1]} />
				) : null}
				{data && data.result.properties.name == "C-3PO" ? (
					<img className="characterImg" src={images[2]} />
				) : null}
				{data && data.result.properties.name == "R2-D2" ? (
					<img className="characterImg" src={images[3]} />
				) : null}
				{data && data.result.properties.name == "Darth Vader" ? (
					<img className="characterImg" src={images[4]} />
				) : null}
				{data && data.result.properties.name == "Leia Organa" ? (
					<img className="characterImg" src={images[5]} />
				) : null}
				{data && data.result.properties.name == "Owen Lars" ? (
					<img className="characterImg" src={images[6]} />
				) : null}
				{data && data.result.properties.name == "Beru Whitesun lars" ? (
					<img className="characterImg" src={images[7]} />
				) : null}
				{data && data.result.properties.name == "R5-D4" ? (
					<img className="characterImg" src={images[8]} />
				) : null}
				{data && data.result.properties.name == "Biggs Darklighter" ? (
					<img className="characterImg" src={images[9]} />
				) : null}
				{data && data.result.properties.name == "Obi-Wan Kenobi" ? (
					<img className="characterImg" src={images[10]} />
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
