import React from "react";
import CardHome from "../../components/CardsHome/CardHome";
import axios from "axios";
import {useState, useEffect} from "react";


export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect (() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => {
          setPokemons(response.data.results)
          console.log(response)
      })
      .catch((err) =>{
        alert("algo deu errado", err)
      })

  }, []);

  const changePokeName = (e) => {
    setPokeName(e.target.value)
  };




  

  return (
    <div>
      <h1>HOME</h1>
      <input onChange={changePokeName}/>
      <option value={""}> Nenhum</option>
      {pokemons.map((pokemon) => (
        <option value={pokemon.name}>{pokemon.name}</option>
      ))}
      
      {pokeName && <CardHome pokeName={pokeName}/>}
    </div>
  );
}
