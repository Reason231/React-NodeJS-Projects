import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card.jsx";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="flex flex-wrap">
      {moviesData && moviesData.Search?.map((currMovie) => (
        <Card key={currMovie.imdbID} currMovie={currMovie} />
      ))}
    </ul>
  );
};
