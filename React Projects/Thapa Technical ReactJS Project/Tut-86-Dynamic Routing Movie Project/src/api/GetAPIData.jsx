// It will be loaded in the /movie route only, see App.jsx
export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=batman&apikey=${import.meta.env.VITE_API_KEY}&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
