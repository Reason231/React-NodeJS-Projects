import { memo, useCallback, useState } from "react";

// Problem is: Child Component is re-rendering when we click on the btn and React.memo can't solve it alone.

const Button = memo(({ handleClick, children }) => {

    // After using memo and useCallBack this console is not re-rendering
  console.log(`Rendering button: ${children}`);

  return (
    
    // It triggers the state update
    <button
      onClick={handleClick}
      className={`${children === "Increment" ? "bg-red-500" : "bg-blue-500"} m-2`}
    >
      {children}
    </button>
  );
});

export const Tut74useCallback = () => {
  const [count, setCount] = useState(0);


    const increment=useCallback(() => {
        console.log("increment inside");
        setCount((prev) => prev + 1);
    },[])
    const decrement=useCallback(() => {
        console.log("decrement inside");
        setCount((prev) => prev - 1);
    },[])


  return (
    <>
      <div>
        <h1>{count}</h1>

        {/* Component Props */}
        <Button handleClick={increment}>Increment</Button>
        <Button handleClick={decrement}>Decrement</Button>
      </div>
    </>
  );
};
