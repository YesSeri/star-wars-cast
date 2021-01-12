import React from 'react'
import { Character } from "../utils/classes";

type CardProp = {
	character: Character
}

const Card = ({character}: CardProp) => {
	return (
		<div>
			{character.name}	
			{character.films}	
			{character.homeworld}	
			{character.species}	
		</div>
	)
}

export default Card
