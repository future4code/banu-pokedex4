import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"


export default function CardHome(props) {

const [pokemon, setPokemon] = useState([])
const [pokeShiny, setPokeShiny] = useState(true)

const onClickShiny = () => {
  setPokeShiny(!pokeShiny)
}

useEffect(() => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
  .then((response) => {
    console.log("poke:", response.data)
    setPokemon(response.data);
    
  })
  .catch((error) => {
    alert("algo deu errado")
  })
}, [props.pokeName]);




  return <div>
   <p>{pokemon.name}</p>
     {pokemon.moves &&  <p>{pokemon.moves[0].move.name} </p>}
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.types && <p>{pokemon.types[1].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        
      )}
      <button>Shiny</button>
  </div>;
}
