import Counter from "./Counter";
import Stats from "./Stats";

export default function PokemonLayout({ children }) {
  return (
    <div>
      {children}

      <Counter />
      <h1>This is the layout</h1>
    </div>
  );
}
