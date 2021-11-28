import React from "react";

export default function Pokedex(props) {
  return (
    <div>
      <h1>POKEDEX</h1>
      <button onClick={props.trocaTela}>Voltar</button>
    </div>
  );
}
