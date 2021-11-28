import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"


export default function CardHome(props) {

const [pokemon, setPokemon] = useState([])
const [pokeShiny, setPokeShiny] = useState(false)

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
     {pokemon.moves &&  pokemon.moves.map((item, i) => i <= 3 ?   <p>{item.move.name}</p> : null)}
      {pokemon.types && pokemon.types.map((item, i) => <p>{item.type.name}</p>)}
      
      
      {pokemon.sprites && (
        <img src={pokeShiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
        
      )}
      <button onClick={onClickShiny}>Shiny</button>
      <button onClick={props.trocaTela}>Ir para Pokedex</button>
  </div>;
}
