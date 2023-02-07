import Link from "next/link";

async function getData(url) {
  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

let colorClass = "";

export default async function PokeCard({ url }) {
  const pokeData = await getData(url);

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

  colorClass = getColorType(pokeData.types[0].type.name);

  return (
    <Link href={`/pokemon/${pokeData.id}`}>
      <div
        className={`PokeCard relative rounded-xl ${colorClass} shadow-md  text-yellow-50 relative flex flex-row justify-between p-4 h-32`}>
        <div className="PokeCard_text w-1/2  flex flex-col  ">
          <span className="PokeId absolute right-3 top-2 ">
            #{pokeData.id.toString().padStart(3, "0")}{" "}
          </span>
          <h3 className="font-bold capitalize mb-2  ">{pokeData.name}</h3>
          <div className="pokeTypes flex flex-col">
            {pokeData.types.map((t) => (
              <span
                key={t.type.name}
                className={` border-2 border-yellow-50 rounded-full text-xs text-center capitalize font-semibold p-1 mb-2 w-5/6 ${getColorType(
                  t.type.name
                )}  `}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
        <img
          className="object-cover  right-0 h-20 w-20 mt-4 "
          src={pokeData.sprites.front_default}
          alt={pokeData.name}
        />
      </div>
    </Link>
  );
}
