import React, { useState, useEffect } from "react";
import { Character } from "./utils/classes";
import CharacterCards from "./components/CharacterCards";
import axios from 'axios'
import "./App.css";
import Logo from "./components/Logo";
// import CharacterGrid from './components/CharacterGrid';

const App = () => {
	const [characters, setCharacters] = useState<Array<Character>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCharacters = async ():Promise<any> => {

			const res = await axios(`https://swapi.dev/api/people/`);
			const formattedCharacters = formatCharacters(res.data.results)
			setCharacters(formattedCharacters);
			setIsLoading(false)
			return formattedCharacters
		};
		getCharacters();
	}, []);

	const formatCharacters= (data: any): Array<Character> => {
		const formatedCharacters = data.map((el: any) => {
			console.log(el)
			return new Character(el.name, el.films, el.homeworld, el.species)
		})
		return formatedCharacters;
	}
	return (
		<div className="App">
			<Logo />
			<CharacterCards characters={characters} isLoading={isLoading} />
		</div>
	);
};

export default App;
