"use client";

import PokeStats from "./PokeStats";

export default function Stats({ stats, color }) {
  return (
    <section className="Stats_props w-full mb-8 flex flex-col justify-around ">
      <div className=" flex flex-col justify-center mt-20 ">
        <h1 className={"my-5 text-xl text-cyan-700"}>Stats</h1>
        {stats.map((s) => (
          <PokeStats key={s.stat.name} sta={s} color={color} />
        ))}
      </div>
    </section>
  );
}
