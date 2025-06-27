export const PokemonCard = ({ detailedData }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-blue-100 py-10">
      {detailedData.map((pokemon, index) => (
        <div
          key={index}
          className="border-2 border-blue-600 bg-white w-[20dvw] rounded-2xl shadow-md p-4 flex flex-col items-center gap-3 "
        >
          <div className="h-[140px] w-[140px] border-2 border-blue-300 rounded-lg flex justify-center items-center bg-blue-50">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="h-[120px] w-[120px] object-contain"
            />
          </div>

          <p className="text-xl font-semibold">Name: {pokemon.name}</p>
          <p className="text-sm text-white bg-green-400 rounded-md p-2">
            Type: {pokemon.types.map((currType) => currType.type.name).join(", ")}
          </p>

          <div className="text-sm space-y-1 flex flex-col gap-2">
            <div className="flex justify-evenly">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Speed: {pokemon.stats[5].base_stat}</p>
            </div>

            <div className="flex justify-center gap-4">
            <p>Experience: {pokemon.base_experience}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Ability: {pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
