import React from 'react'
import { Character } from "../utils/classes";

type CardProp = {
	character: Character
}

const Card = ({character}: CardProp) => {
	return (
		<div className='card'>
			{character.name}<hr />

			{character.homeworld}<br/>	
			{character.species}	
		</div>
	)
}

export default Card
