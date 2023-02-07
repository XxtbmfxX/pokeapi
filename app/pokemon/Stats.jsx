"use client";

import { useState } from "react";

export default function Stats({ evolutions }) {
  const [stat, setstat] = useState(0);

  const statsArray = ["stats", "evolutions"];

  return (
    <section className="Stats_props w-full mb-8 flex flex-col justify-around ">
      <div className=" theStats flex justify-around ">
        {statsArray.map((stats, index) => (
          <button
            key={index}
            className="p-2 px-4 bg-cyan-300 rounded-xl hover:drop-shadow-lg "
            onClick={() => setstat(index)}>
            {stats}
          </button>
        ))}
      </div>

      <div className="TheText flex items-center justify-center mt-20 ">
        {stat === 0 &&
          evolutions.map((e, index) => (
            <h1 className="block m-2" key={index}>
              {e.ability.name}
            </h1>
          ))}

        {stat === 1 && <h1>stat 2 set</h1>}
      </div>
    </section>
  );
}
