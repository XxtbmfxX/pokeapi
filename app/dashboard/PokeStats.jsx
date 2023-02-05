import styles from "./PokeStats.module.css";

export default function PokeStats() {
  return (
    <section className={styles.PokeStats}>
      <ul>
        <li className="flex items-center justify-between align-middle ">
          <span className="mr-2 text-blue-300 ">stat</span>{" "}
          <span className="mr-2 text-gray-300 ">000</span>{" "}
          <span className="bg-gray-300 w-full mt-2 rounded-lg  ">
            <span className="bg-blue-400 w-3/4 h-2 rounded-lg "></span>
          </span>
        </li>
        <li className="flex items-center justify-between align-middle ">
          <span className="mr-2 text-blue-300 ">stat</span>{" "}
          <span className="mr-2 text-gray-300 ">000</span>{" "}
          <span className="bg-gray-300 w-full mt-2 rounded-lg  ">
            <span className="bg-blue-400 w-3/4 h-2 rounded-lg "></span>
          </span>
        </li>
        <li className="flex items-center justify-between align-middle ">
          <span className="mr-2 text-blue-300 ">stat</span>{" "}
          <span className="mr-2 text-gray-300 ">000</span>{" "}
          <span className="bg-gray-300 w-full mt-2 rounded-lg  ">
            <span className="bg-blue-400 w-3/4 h-2 rounded-lg "></span>
          </span>
        </li>
      </ul>
    </section>
  );
}
