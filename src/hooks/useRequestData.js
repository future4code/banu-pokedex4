import axios from "axios"
import { useState, useEffect } from "react";

export default function useRequestData() {
    const [pokemons, setPokemons] = useState({})

    useEffect (() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
        .then(response => {
            setPokemons(response.data.results)
            console.log(response.data.results)
        })
    })



    return pokemons
}