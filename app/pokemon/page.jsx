import Link from "next/link";

export default async function pokepage({ params }) {
  return (
    <div className="pokepage">
      <Link href={`/pokemon/1`}>GOGOGOGO</Link>
      <h1>ok pokepage</h1>
    </div>
  );
}
