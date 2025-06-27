import { useState,useEffect } from "react";

export const Tut57LoadingState=()=>{

      // We will get the null console at first and it won't render,  React tries to render before the fetch finishes, so we need to use the <Loading state>
    const [pokemon, setPokemon] = useState(null);

    // It means that the data is still fetching so the loading is true
    const [loading,setLoading] = useState(true)

    // Error handling if any error occurs while fetching or the link is misspelled.
    const [error,setError]=useState(null)

    useEffect(() => {
      const API = async () => {
        try {
          const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

         // Check if the response is successful (status 200)
         if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
          }

          const data = await res.json();
          setPokemon(data);
        } catch (e) {
          console.warn(e);
          setError("Failed to fetch data. Please try again later.")
        }
        finally{
          setLoading(false) // Loading is false whether it is success or failure
        }
      };
      API();
    }, []);
    
    // The use of errorState
    if (error) {
      return <h1 className="font-bold text-4xl text-red-500">{error}</h1>;
    }
    
    console.log(pokemon)

    return (
    <>
    {/* The use of Loading State */}
    {loading ? (<h1 className="font-bold text-4xl">Data is still loading...</h1>) 
    : 
    (
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
                  src={pokemon?.sprites?.other?.dream_world?.front_default}
                  alt={pokemon?.name}
                />
                <h1 className="font-bold text-3xl">{pokemon.name}</h1>
                <div className="flex gap-6 mt-6">
                  <p>
                    Height : <span>{pokemon.height}</span>
                  </p>
                  <p>
                    Weight : <span>{pokemon.weight}</span>
                  </p>
                  <p>
                    speed: <span>{pokemon.stats[5].base_stat}</span>
                  </p>
                </div>
              </figure>
              

            </li>
          </ul>
        </section>
      </div>
    )}
    </> 
    );
  };