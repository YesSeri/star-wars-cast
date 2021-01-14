import React from "react";
import { Character } from "../utils/classes";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

type CardProp = {
	character: Character;
};

const StyledCard = styled.div`
	background-color: grey;
	height: 16em;
	padding: 1em 1em 1em 1em;
	ul {
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		list-style-type: none;
		height:100%;
		margin: 0;
		padding: 0;

		li {
			text-transform: capitalize;
			h2{
				border-bottom: solid black 1px;
				margin: 0px;
				padding-bottom: 15px;
			}
		}
	}
`;

const Card = ({ character }: CardProp) => {
	return (
		<StyledCard>
			<ul>
				<li><h2>{character.name}</h2></li>
				<li><b>Gender:</b> {character.gender}</li>
				<li><b>Birth Year:</b> {character.birthYear}</li>
				<li><b>Hair Color:</b> {character.hairColor}</li>
				<li><b>Height:</b> {character.height}</li>
				<li><b>Mass:</b> {character.mass}</li>
			</ul>
		</StyledCard>
	);
};

export default Card;
