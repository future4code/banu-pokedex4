import React from "react";
import CardHome from "../../components/CardsHome/CardHome";
import Pokedex from "../../pages/Pokedex/Pokedex";
import axios from "axios";
import {useState, useEffect} from "react";


export default function Home() {

  const [gerenciarTela, setGerenciarTela] = useState(true);

  

  

 

  const trocaTela = () => {
    setGerenciarTela(!gerenciarTela);
  };




  

  return (
    <div>
      
      
      
      {gerenciarTela ? (
      <CardHome  trocaTela={trocaTela}/>
      

      ) : (
        <Pokedex trocaTela={trocaTela} />
      )}
    </div>
  );
}
