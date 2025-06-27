import { useEffect, useState } from "react";

export const CustomFetch = () => {
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const result = await res.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);

    return {data,loading,error}
  };


  const {data,loading,error}=useFetch("https://pokeapi.co/api/v2/pokemon?limit=")

  return (
  <>
    {loading && <p>Loading...</p>}
    {error && <p>You have error while fetching the data</p>}
    {data && data.results.map((currData)=> <p key={currData.name}>{currData.name}</p>)}
  </>
  );
};
