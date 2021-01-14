import React from "react";
import { Character } from "../utils/classes";
import Card from "./Card";

type CharacterCardsProps = {
	characters: Array<Character>;
	isLoading: boolean;
};
const CharacterCards = ({ characters, isLoading }: CharacterCardsProps) => {
	return isLoading ? (
		<h2>LOADING</h2>
	) : (
			<div className="characterCards">
				{characters.map((character) => {
					return <Card key={character.name} character={character} />
				})}
			</div>
		);
};

export default CharacterCards;
