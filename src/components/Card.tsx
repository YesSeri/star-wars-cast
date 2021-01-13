import React from 'react'
import { Character } from "../utils/classes";

type CardProp = {
	character: Character
}

const Card = ({character}: CardProp) => {
	return (
		<div>
			{character.name}<br></br>	
			{character.homeworld}	
		</div>
	)
}

export default Card
