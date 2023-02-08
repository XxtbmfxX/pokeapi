"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

let colorClass = "";

export default function PokeCard({ url }) {
  const [pokeData, setpokeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clicked, setclicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setpokeData(res.data);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const getColorType = (type) => {
    switch (type) {
      case "normal":
        return "bg-gray-300";

      case "fire":
        return "bg-red-500";

      case "water":
        return "bg-blue-500";

      case "grass":
        return "bg-green-500";

      case "electric":
        return "bg-yellow-400";

      case "ice":
        return "bg-blue-400";

      case "fighting":
        return "bg-red-400";

      case "poison":
        return "bg-purple-500";

      case "ground":
        return "bg-yellow-500";

      case "flying":
        return "bg-blue-300";

      case "psychic":
        return "bg-pink-500";

      case "bug":
        return "bg-green-400";

      case "rock":
        return "bg-gray-500";

      case "ghost":
        return "bg-purple-500";

      case "dragon":
        return "bg-purple-400";

      case "dark":
        return "bg-gray-800 text-yellow-50 ";

      case "steel":
        return "bg-gray-500";

      case "fairy":
        return "bg-pink-500";

      default:
        return "bg-gray-500";
    }
  };

  if (pokeData != null) {
    colorClass = getColorType(pokeData.types[0].type.name);

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Link
              onClick={() => setclicked(true)}
              href={`/pokemon/${pokeData.id}`}>
              <div
                className={` flex flex-col justify-center p-4 rounded-xl text-yellow-50 ${colorClass}`}>
                <span>#{("000" + pokeData.id).slice(-4)} </span>
                <h2 className=" font-bold capitalize text-center ">
                  {pokeData.name}
                </h2>
                <img
                  src={
                    pokeData.sprites.front_default ||
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`
                  }
                  alt={pokeData.name}
                />
                {clicked ? (
                  <span className="m-3">Loading...</span>
                ) : (
                  <>
                    <ul className="flex flex-wrap">
                      {pokeData?.types.map((type) => (
                        <li
                          className={`p-1 px-2 m-1 capitalize w-auto inline rounded-lg border-2 border-white  ${getColorType(
                            type.type.name
                          )}`}
                          key={type.type.name}>
                          {type.type.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Link>
          </>
        )}
      </div>
    );
  }
}
