"use client";

import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

async function handleLoadMore(url) {
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  nextPage.next;
  return data.results;
}

export default function PokemonGallery() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      setPokemon((p) => [...p, ...res.data.results]);
      setLoading(false);
    };

    fetchData();
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setOffset(offset + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <>
      <div className=" flex flex-col w-full items-center justify-center mx-auto">
        <div className=" w-11/12 grid min-[320px]:grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4">
          {pokemon.map((p, index) => (
            <PokeCard key={index} url={p.url} />
          ))}
        </div>
        <div className="w-full h-5/6">.</div>
      </div>
      {loading && <p className="text-center m-6 ">Loading...</p>}
    </>
  );
}
