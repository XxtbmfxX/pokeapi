import Link from "next/link";

import Stats from "@/app/pokemon/Stats";

//get all the params needed from the specific urls
//it was the samplest way ._.)

async function getDescription(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
      cache: "no-store",
    });

    debugger;
    const data = await res.json();

    if (data.flavor_text_entries != []) {
      return data.flavor_text_entries[0].flavor_text;
    } else {
      return "(^人^)";
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
}

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

export default async function NotesPage({ params }) {
  const pokemon = await getPokemon(params.id);
  const description = await getDescription(params.id);

  let colorClass = getColorType(pokemon.types[0].type.name);

  return (
    <main className={`flex flex-col items-center ${colorClass}`}>
      <header
        className={`flex justify-between w-full p-10 pb-0 mb-2 ${colorClass}`}>
        <Link href="/">
          <span className="material-symbols-outlined text-3xl ">
            arrow_back
          </span>
        </Link>
        <span className="text-yellow-50 text-xl">
          #{("000" + pokemon.id).slice(-4)}{" "}
        </span>
      </header>
      <img
        className="rounded-3xl w-3/4 z-10"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`}
        alt="pokemon"
      />

      <article
        style={{ marginTop: "-50px" }}
        className={`PokePage_stats rounded-t-3xl bg-slate-50 w-full p-5  `}>
        <section className="Stats_text m-10 flex flex-col items-center justify-center pt-5 ">
          <h1 className="text-3xl w-full text-center  capitalize ">
            {pokemon.name}
          </h1>
          <div className="flex">
            {pokemon.types.map((t) => (
              <span
                style={{ width: "auto" }}
                className={`text-center capitalize p-1 px-3 m-2 ${getColorType(
                  t.type.name
                )} rounded-full w-1/3 drop-shadow-md text-white `}>
                {t.type.name}
              </span>
            ))}
          </div>

          <p className="mt-5 p-2 text-center  text-gray-800 ">{description}</p>
        </section>

        <Stats stats={pokemon.stats} color={colorClass} />
      </article>
    </main>
  );
}
