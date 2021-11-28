import React, { useContext } from "react";
import { PokeListContainer } from "./styled";

export default function Pokedex() {
  const { pokedex } = useContext(GlobalStateContext);


  return (
    <>
     <Header
        title={"Pokédex"}
    />
      <PokeListContainer>
        {pokedex &&
          pokedex.map((poke) => {
            return <PokemonCard isPokedex key={poke.name} poke={poke} />;
          })}
      </PokeListContainer>
    </>
  );
}
