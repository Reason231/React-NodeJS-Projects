import { useEffect, useState } from "react";
import {PokemonCard} from "./PokemonCard"

export const Pokemon = () => {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search,setSearch]=useState("")

  // First API call - list of Pokémon
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30"); // use 30 instead of 124 for testing
        const data = await res.json();
        // console.log(data)

        // Fetching all pokemon's detailed data
        const detailedResponses = data.results.map(async (currPokemon)=>{
            const data= await fetch(currPokemon.url)
            const detailedData= await data.json()
            return detailedData
        })


        // Wait for all detailed data to be fetched. 
        const allDetailedData = await Promise.all(detailedResponses);
        setDetailedData(allDetailedData);

      } catch (e) {
        console.log("Error fetching data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

      // State data
      console.log(detailedData)
    
      //search functionality
    const searchData = detailedData.filter((curPokemon) =>
      // If the inputField is empty, it returns true so all the data will be shown if the inputField is empty
      curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
     <div className="border-2 border-blue-600 flex flex-col justify-center items-center bg-blue-100 gap-4 py-10 min-h-screen">
  <h1 className="text-3xl font-bold text-blue-800">Let's Catch Pokémon</h1>
  <input
    type="text"
    className="border-4 w-80 px-4 py-2 border-blue-500 bg-white rounded-lg shadow-md focus:outline-none"
    placeholder="Enter Pokémon" 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
  />

  {/* It will pass the data, according to the inputField value */}
  <PokemonCard detailedData={searchData} />
</div>

    </>
  );
};
