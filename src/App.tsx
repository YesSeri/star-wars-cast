import React, { useState, useEffect } from "react";
import { Character } from "./utils/classes";
import CharacterCards from "./components/CharacterCards";
import axios from "axios";
import "./App.css";
import Logo from "./components/Logo";
// import CharacterGrid from './components/CharacterGrid';

const App = () => {
	const [characters, setCharacters] = useState<Array<Character>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCharacters = async (): Promise<any> => {
			const res = await axios(`https://swapi.dev/api/people/`);
			const data = res.data.results;
			setCharacters(data.map((el: any) => {
				const a =  new Character(el.name, el.height, el.mass, el.hair_color, el.gender, el.birth_year)
				return a
			}))
			setIsLoading(false);
		};
		getCharacters().then((data) => {
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
