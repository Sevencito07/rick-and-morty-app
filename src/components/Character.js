import React from 'react'

export default function character(character) {
  return (
    <div className='conten-character'>
        <h3>{character.name}</h3>
        <img src={character.image}/>
        <p>species: {character.species} </p>
        <p>origin: {character.origin}</p>
        <p>gender : {character.gender}</p>
    </div>
  )
}
