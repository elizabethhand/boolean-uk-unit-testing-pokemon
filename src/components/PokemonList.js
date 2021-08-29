import { useState } from "react";
import pokemonData from "../data.json";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemon, setPokemon] = useState(pokemonData.pokemon);

  return (
    <>
      <h1>Select Your Pokemon</h1>
      <ul className="grid:responsive">
        {pokemon.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
}

export default PokemonList;
