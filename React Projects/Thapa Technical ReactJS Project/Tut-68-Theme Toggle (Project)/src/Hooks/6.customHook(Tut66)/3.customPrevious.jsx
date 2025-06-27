// Track Previous Value
import { useState, useRef, useEffect } from "react";

export const CustomPrevious = () => {
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;   // stores the latest value AFTER render
    });
    return ref.current;     // this returns the value from the previous render
  };

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);  // It holds the previous Value

  return (
    <>
      <h2 className="mt-4">Counter (Prev: {prevCount})</h2>
      <button onClick={() => setCount(count + 1)} className="border px-2 py-1">
        Count: {count}
      </button>
    </>
  );
};
