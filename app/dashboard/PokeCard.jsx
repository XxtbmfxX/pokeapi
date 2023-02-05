"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokeCard({ pokemon }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => {
        setImage(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.data.id}.png`
        );
        setName(res.data.name);
        setTypes(res.data.types);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon]);
  return (
    <Link href="/pokemon">
      <div
        className={`PokeCard relative rounded-xl bg-red-400 shadow-md flex flex-row justify-between p-2 h-32`}>
        <div className="PokeCard_text">
          <h3>{name}</h3>
          {types.map((t) => (
            <span className="block">{t.type.name}</span>
          ))}
        </div>
        <img className="object-cover h-20 w-20 " src={image} alt={name} />
      </div>
    </Link>
  );
}
