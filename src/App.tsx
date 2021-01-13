import React, { useState, useEffect } from "react";
import { UrlToPlanet, Character } from "./utils/classes";
import CharacterCards from "./components/CharacterCards";
import axios from 'axios'
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
			const res = await axios(`https://swapi.dev/api/people/`); // &search=luke if i want to search
			const shorterResults = res.data.results.slice(0, 6)
			const formattedCharacters = formatCharacters(shorterResults) // The only data the fetch request get is the name. The others are just urls to other locations in the api.
			setCharacters(formattedCharacters);
			setIsLoading(false)
			return formattedCharacters
		};
		getCharacters();

		const formatCharacters = (data: Array<Object>) => {
			return data.map((el: any) => (new Character(el.name, el.films, el.homeworld, el.species)))
		}
	}, [])

	return (
		<div className="App">
			<Logo />
			<CharacterCards characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default App;
