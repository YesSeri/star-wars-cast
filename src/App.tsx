import React, { useState, useEffect } from "react";
import { UrlsToPlanets, Character } from "./utils/classes";
import CharacterCards from "./components/CharacterCards";
import axios from 'axios'
import "./App.css";
import Logo from "./components/Logo";


const App = () => {
	const [characters, setCharacters] = useState<Array<Character>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async (url: string) => {
			const res = await axios(url); // &search=luke if i want to search
			return res.data;
		}
		const getCharacters = async (): Promise<any> => {
			const charData = await fetchData(`https://swapi.dev/api/people/`); // &search=luke if i want to search

			const characters = charData.results.slice(0, 3)
			let charArr = characters.map((char: any) => {
				return {
					name: char.name,
					homeworldUrl: char.homeworld,
					speciesUrl: char.species.length === 0 ? "https://swapi.dev/api/species/1/" : char.species[0]
				}
			})
			let planets: UrlsToPlanets = {};
			for (let i = 0; i < charArr.length; i++) {
				let homeworld;
				const url = charArr[i].homeworldUrl;
				if (url in planets) {
					homeworld = planets[url]
				} else {
					const homeworldData = await fetchData(url)
					homeworld = homeworldData.name
					planets[url] = homeworld;
				}
				charArr[i].homeworld = homeworld
			}
			for (let i = 0; i < charArr.length; i++) {
				const speciesData = await fetchData(charArr[i].speciesUrl)
				let species = speciesData.name
				charArr[i].species = species
			}
			let formattedCharArr = formatCharArr(charArr);
			console.table(formattedCharArr)
		};
		getCharacters();
	}, [])

	const formatCharArr = (array: Array<any>) => {
		return array.map((char) => {
			return new Character(char.name, ["a movie"], char.homeworld, char.species)
		})
	}

	return (
		<div className="App">
			<Logo />
			<CharacterCards characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default App;
