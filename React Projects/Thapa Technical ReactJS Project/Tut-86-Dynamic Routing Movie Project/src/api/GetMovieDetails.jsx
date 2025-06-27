// {params} directly extracts the parameters from the fetch URL
export const getMovieDetails = async ({ params }) => {
  console.log(`Fetching details for movie ID: ${params.movieID}`);
  const id = params.movieID;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

