export default function PokeStats({ sta, color }) {
  return (
    <li className="flex items-center justify-between align-middle mb-4">
      <span className="mr-2 block w-44 text-blue-400  ">{sta.stat.name}</span>{" "}
      <span className="mr-2 block  text-gray-400  ">{sta.base_stat} </span>{" "}
      <span className="bg-gray-200 w-full mt-2 rounded-lg  ">
        <span className="bg-blue-400 w-3/4 h-2 rounded-lg "></span>
        <span
          style={{ width: `${sta.base_stat}%`, maxWidth: "100%" }}
          className={`${color} block  h-2 rounded-lg ${
            sta.base_stat > 100 && "bg-gradient-to-r from-cyan-500 to-blue-700"
          } `}></span>
      </span>
    </li>
  );
}
