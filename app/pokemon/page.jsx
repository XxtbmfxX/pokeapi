import Image from "next/image";
import Link from "next/link";
import PokeEvolution from "../dashboard/PokeEvolution";
import PokeStats from "../dashboard/PokeStats";

import styles from "./Pokemon.module.css";

export default async function NotesPage() {
  return (
    <main className={styles.PokePage}>
      <header className="flex justify-between w-full p-2 mb-8 bg-teal-200   ">
        <Link href="/">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </header>
      <Image
        className="rounded-3xl w-3/4 z-10"
        src="/face.jpg"
        alt="pokemon"
        width="70"
        height="70"
      />

      <article
        style={{ marginTop: "-30px" }}
        className="PokePage_stats rounded-t-3xl bg-slate-50 w-full p-5  ">
        <section className="Stats_text my-10 flex flex-col items-center justify-center ">
          <h1 className="text-3xl w-full text-center mb-4 ">Squirtle</h1>
          <span className="text-center capitalize bg-teal-200 rounded-full w-1/2 drop-shadow-md  ">
            🚿 Wather
          </span>

          <p className="mt-5 p-2 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            ratione temporibus doloribus magnam soluta repellat atque nisi
            reprehenderit, quidem laboriosam maiores eius, autem blanditiis!
            Repellendus odit deleniti sit quo error.
          </p>
        </section>

        <section className="Stats_props w-full mb-8 flex flex-row justify-around ">
          <span className="p-2 px-4 bg-cyan-300 rounded-xl hover:drop-shadow-lg  ">
            Stats
          </span>
          <span className="p-2 px-4 bg-cyan-300 rounded-xl hover:drop-shadow-lg  ">
            Evolutions
          </span>
          <span className="p-2 px-4 bg-cyan-300 rounded-xl hover:drop-shadow-lg  ">
            Weaknesses
          </span>
        </section>

        <PokeStats />

        <PokeEvolution />
      </article>
    </main>
  );
}
