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

  const previousIndex = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const nextIndex = () => setPokemonIndex(pokemonIndex + 1);

  console.log(pokemonIndex);
  return (
    <div className="container">
      <button onClick={previousIndex}>Précédent</button>

      <PokemonCard pokemon={pokemonList[0]} />

      <button onClick={nextIndex}>Suivant</button>
    </div>
  );
}

export default App;
