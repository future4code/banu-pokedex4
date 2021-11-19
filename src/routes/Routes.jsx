import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import DetailsPage from "../pages/Details/DetailsPage";
import Pokedex from "../pages/Pokedex/Pokedex";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/details" component={DetailsPage} exact />
      <Route path="/pokedex" component={Pokedex} exact />
    </BrowserRouter>
  );
}
