import { useEffect, useState } from "react";

export const Tut56PokemonCard = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const API = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await res.json();
        setApiData(data);
      } catch (e) {
        console.log(e);
      }
    };
    API();
  }, []);

  console.log(apiData);

  return (
    <div className="bg-blue-50">
      <section className="flex flex-col items-center h-screen relative top-10 gap-6">
        <header>
          <h1 className="font-bold text-4xl">Lets Catch Pokemon</h1>
        </header>
        <ul className="border-2 bg-white h-[35dvh] w-[40dvw]">
          <li>
            <figure className="flex flex-col justify-center items-center mt-4">
              {/* We need to use optional chaining because React tries to render before the fetch finishes, so you need to safely access nested values.*/}
              <img
                src={apiData?.sprites?.other?.dream_world?.front_default}
                alt={apiData?.name}
              />
              <h1 className="font-bold text-3xl">{apiData.name}</h1>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};
