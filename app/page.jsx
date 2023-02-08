import PokemonGallery from "./pokemon/PokemonGallery";

export default async function HomePage() {
  return (
    <main className="Main ">
      <h1 className=" w-3/4 font-bold m-4 text-3xl ">Pokedex</h1>
      <PokemonGallery />
    </main>
  );
}
