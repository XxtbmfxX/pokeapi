"use client";

import { useEffect, useRef, useState } from "react";
import PokeCard from "./dashboard/PokeCard";
import axios from "axios";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="Main">
      <article className="grid grid-cols-2 gap-2 p-2">
        {pokemons.map((pokemon, index) => (
          <PokeCard key={index} pokemon={pokemon} />
        ))}
      </article>
    </main>
  );
}
