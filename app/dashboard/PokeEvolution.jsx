import Image from "next/image";

export default function PokeEvolution() {
  return (
    <section className="PokeEvolution w-full flex flex-col items-center justify-center ">
      <div className="PokeEvolution">
        <h2 className="text-5xl font-bold mt-10 mb-5 ">Venasaur</h2>
        <span className="block text-center text-xl  m-4  text-gray-400 ">
          003
        </span>
      </div>
      <Image
        className="object-cover rounded-xl w-80 h-96"
        src="/face.jpg"
        width="80"
        height="1000"
      />
      <div className="Evolutions flex justify-around w-full my-8 ">
        <Image
          className="object-cover rounded-xl w-20 h-16   "
          src="/face.jpg"
          width="80"
          height="100"
        />
        <Image
          className="object-cover rounded-xl w-20 h-16   "
          src="/face.jpg"
          width="80"
          height="100"
        />
        <Image
          className="object-cover rounded-xl w-20 h-16   "
          src="/face.jpg"
          width="80"
          height="100"
        />
      </div>

      <div className="PokeDescription text-gray-700  ">
        <h3 className="font-bold">Evolution Name</h3>
        <p className="leading-6 text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          numquam. Inventore, sit eveniet tempore facilis libero
        </p>
      </div>
    </section>
  );
}
