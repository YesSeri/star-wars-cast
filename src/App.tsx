import React, { useState, useEffect } from "react";
import { UrlToPlanet, Character } from "./utils/classes";
import CharacterCards from "./components/CharacterCards";
import axios from "axios";
import "./App.css";
import Logo from "./components/Logo";
import { Url } from "url";
import { format } from "path";
// import CharacterGrid from './components/CharacterGrid';

const App = () => {
	const [characters, setCharacters] = useState<Array<Character>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCharacters = async (): Promise<any> => {
			const res = await axios(`https://swapi.dev/api/people/`);
			const data = res.data.results;
			const processedData = data.map((el: any) => {
				return {
					name: el.name,
					filmUrls: el.films,
					homeworldUrl: el.homeworld,
					speciesUrl: el.species,
				};
			});
			return processedData;
		};
		getCharacters().then((data) => {
			data.forEach((el: any) => {
				let planet = "";
				let species = "Human";
				if (el.speciesUrl === undefined || el.speciesUrl.length === 0) {
					Promise.all([axios(el.homeworldUrl)]).then(([resHomeworld]) => {
						planet = resHomeworld.data.name;
						console.log([...characters, new Character(el.name, el.filmUrls, planet, species)])
						setCharacters(prevCharacters => {
							return [...prevCharacters, new Character(el.name, el.filmUrls, planet, species)]
						});
					});
				} else {
					Promise.all([axios(el.homeworldUrl), axios(el.speciesUrl[0])]).then(
						([resHomeworld, resSpecies]) => {
							planet = resHomeworld.data.name;
							species = resSpecies.data.name;
						console.log([...characters, new Character(el.name, el.filmUrls, planet, species)])
						setCharacters(prevCharacters => {
							return [...prevCharacters, new Character(el.name, el.filmUrls, planet, species)]
						});
						}
					);
				}
			});
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="App">
			<Logo />
			<CharacterCards characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default App;
