import { useState,useEffect } from "react";
export const CustomDebounce = () => {
  // 4️⃣ useDebounce - Debounce Input Value
  // Debounce is a technique that delays the execution of a function until after a specified amount of time has passed since the last time it was called.

  // It’s used to prevent a function from being called too frequently, like every time a user types a character.
  const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);


  return <>
    {/* useDebounce */}
    <h2 className="mt-4">Search</h2>
      <input
        className="border p-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to debounce..."
      />
      <p>Debounced: {debouncedSearch}</p></>;
};
