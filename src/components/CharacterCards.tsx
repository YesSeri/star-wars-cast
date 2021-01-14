import React from "react";
import { Character } from "../utils/classes";
import Card from "./Card";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: grid;
	margin:auto;
	align-items: center;
	justify-content: center;
	gap: 1em;
	grid-template-columns: repeat(auto-fill, max(221px, 24%));
`;

type CharacterCardsProps = {
	characters: Array<Character>;
	isLoading: boolean;
};
const CharacterCards = ({ characters, isLoading }: CharacterCardsProps) => {
	return isLoading ? (
		<h2>LOADING</h2>
	) : (
		<StyledDiv>
			{characters.map((character) => {
				return <Card key={character.name} character={character} />;
			})}
		</StyledDiv>
	);
};

export default CharacterCards;
