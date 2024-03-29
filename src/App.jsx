import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div className="container">
      <button>Précédent</button>

      <PokemonCard pokemon={pokemonList[0]} />

      <button>Suivant</button>
    </div>
  );
}

export default App;
