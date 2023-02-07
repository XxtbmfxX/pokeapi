import PokeCard from "./pokemon/PokeCard";

async function getImage(id) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon", {
    cache: "no-store",
  });
  const data = await res.json();
}

async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon", {
    cache: "no-store",
  });
  const data = await res.json();

  return data.results;
}

export default async function HomePage() {
  const pokemonList = await getPokemons();

  // const handleLoadMore = useCallback(() => {
  //   fetch(nextPage)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemonList((prevList) => [...prevList, ...data.results]);
  //       setNextPage(data.next);
  //     })
  //     .catch((error) => console.error(error));
  // }, [nextPage]);

  return (
    <main className="Main ">
      <h1 className=" w-3/4 font-bold m-4 text-3xl ">Pokedex</h1>
      <ul className=" w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.name}>
            <PokeCard url={pokemon.url} />
          </li>
        ))}
      </ul>
      {/* {nextPage && (
        <button
          className="p-2 bg-blue-300  my-10  w-3/4 rounded-lg "
          onClick={handleLoadMore}>
          Load More
        </button>
      )} */}
    </main>
  );
}
