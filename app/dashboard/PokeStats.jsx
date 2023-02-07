export default function PokeStats({ sta }) {
  return (
    <li className="flex items-center justify-between align-middle mb-4">
      <span className="mr-2 block w-44 text-blue-300  ">{sta.stat.name}</span>{" "}
      <span className="mr-2 block  text-gray-300  ">{sta.base_stat} </span>{" "}
      <span className="bg-gray-300 w-full mt-2 rounded-lg  ">
        <span className="bg-blue-400 w-3/4 h-2 rounded-lg "></span>
        <span
          style={{ width: `${sta.base_stat}%` }}
          className="bg-blue-400 block  h-2 rounded-lg "></span>
      </span>
    </li>
  );
}
