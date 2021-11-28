import React from "react";
import CardHome from "../../components/CardsHome/CardHome";
import Pokedex from "../../pages/Pokedex/Pokedex";
import axios from "axios";
import {useState, useEffect} from "react";


export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState("")
  const [gerenciarTela, setGerenciarTela] = useState(true);

  

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

  const trocaTela = () => {
    setGerenciarTela(!gerenciarTela);
  };




  

  return (
    <div>
      <h1>HOME</h1>
      <select onChange={changePokeName}>
      <option value={""}> Nenhum</option>
      {pokemons.map((pokemon) => (
        <option value={pokemon.name}>{pokemon.name}</option>
      ))}
      </select>
      {pokeName && <CardHome pokeName={pokeName}/>}
      {gerenciarTela ? (
        <CardHome trocaTela={trocaTela} />
      ) : (
        <Pokedex trocaTela={trocaTela} />
      )}
    </div>
  );
}
