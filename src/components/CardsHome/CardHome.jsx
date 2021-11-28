import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"


export default function CardHome(props) {
  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState("")
const [pokemon, setPokemon] = useState([])
const [pokeShiny, setPokeShiny] = useState(false)

const onClickShiny = () => {
  setPokeShiny(!pokeShiny)
};

const changePokeName = (e) => {
  setPokeName(e.target.value)
};

useEffect (() => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(response => {
      setPokemons(response.data.results)
      console.log(response)
  })
  .catch((err) =>{
    alert("algo deu errado", err)
  })

}, []);



useEffect(() => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then((response) => {
    console.log("poke:", response.data)
    setPokemon(response.data);
    
  })
  .catch((error) => {
    alert("algo deu errado")
  })
  
    
}, [pokeName]);









  return <div>
    <h1>HOME</h1>
    <select onChange={changePokeName}>
      <option value={""}> Nenhum</option>
      {pokemons.map((pokemon) => (
        <option value={pokemon.name}>{pokemon.name}</option>
      ))}
      </select>
   <p>{pokemon.name}</p>
     {pokemon.moves &&  pokemon.moves.map((item, i) => i <= 3 ?   <p>{item.move.name}</p> : null)}
      {pokemon.types && pokemon.types.map((item, i) => <p>{item.type.name}</p>)}
      
      
      {pokemon.sprites && (
        <img src={pokeShiny? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
        
      )}
      <button onClick={onClickShiny}>Shiny</button>
      <button onClick={props.trocaTela}>Ir para Pokedex</button>
      <button>Add Pokedex</button>
  </div>;
}
