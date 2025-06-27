import api from "../api/countryData.json";

export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <span className="text-6xl text-white">
          Here are the Interesting Facts{" "}
        </span>
        <br />
        <span className="text-6xl text-white"> we're proud of</span>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {api.map((currData) => {
          const { id, countryName, capital, population, interestingFact } =
            currData;
          return (
            <div
              key={id}
              className="flex gap-2 flex-col p-14 container-card bg-blue-box"
            >
              <p className="text-6xl mb-5">{countryName}</p>
              <p>Capital:{capital}</p>
              <p>Population:{population}</p>
              <p>Interesting Fact:{interestingFact}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
