import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  // Expensive calculation function means it takes time to execute the function
  const sum = () => {
    console.log("Calculating Sum....");

    let i = 0;
    for (i; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total=useMemo(()=>{
    return sum()
  },[])
   
  return <p>sum: {total}</p>;
};

export const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* It calls the above function */}
      <ExpensiveComponent />
      {/* Click this button continuously to see the effect without useMemo hook  */}
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-red-600"
      >
        Re-render Parent
      </button>
      {/* It will be delayed without useMemo hook */}
      <p>Parent re-renders: {count}</p>
    </>
  );
};
