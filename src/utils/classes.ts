
export class FullCharacterInfo {
	name: string;
	films: Array<string>;
	homeworld: string;
	species: string;
  constructor(name: string, films: Array<string>, homeworld: string, species: string) {
		this.name = name
		this.films = films
		this.homeworld = homeworld
		this.species = species
  }
}
export class Character {
	name: string;
	height: string;
	mass: string;
	hairColor: string;
	gender: Gender;
	birthYear: string;
  constructor(name: string, height: string, mass: string, hairColor: string, gender: Gender, birthYear: string) {
		this.name = name
		this.height = height
		this.mass = mass
		this.hairColor = hairColor
		this.gender = gender
		this.birthYear = birthYear
  }
}
export enum Gender{
	male = 'male',
	female = 'female',
	none = 'n/a'
}
export type UrlToPlanet = {
	[key: string]: string
}
// "name": "Luke Skywalker", 
// "height": "172", 
// "mass": "77", 
// "hair_color": "blond", 
// "skin_color": "fair", 
// "eye_color": "blue", 
// "birth_year": "19BBY", 
// "gender": "male", 
// "homeworld": "http://swapi.dev/api/planets/1/", 
// "films": [
// 		"http://swapi.dev/api/films/1/", 
// 		"http://swapi.dev/api/films/2/", 
// 		"http://swapi.dev/api/films/3/", 
// 		"http://swapi.dev/api/films/6/"
// ], 
// "species": [], 
// "vehicles": [
// 		"http://swapi.dev/api/vehicles/14/", 
// 		"http://swapi.dev/api/vehicles/30/"
// ], 
// "starships": [
// 		"http://swapi.dev/api/starships/12/", 
// 		"http://swapi.dev/api/starships/22/"
// ], 
// "created": "2014-12-09T13:50:51.644000Z", 
// "edited": "2014-12-20T21:17:56.891000Z", 
// "url": "http://swapi.dev/api/people/1/"