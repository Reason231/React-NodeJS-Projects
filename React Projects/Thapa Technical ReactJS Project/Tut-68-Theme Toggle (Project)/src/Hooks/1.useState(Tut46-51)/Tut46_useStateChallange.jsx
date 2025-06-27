import { useState } from "react";

export const Tut46 = () => {
  const [value, setValue] = useState(0);

  const [steps, setSteps] = useState(1); 

  function handleInputChange(e) {
    const newStep = Number(e.target.value); 
    setSteps(newStep);
  }

  return (
    <>
      <main className="flex justify-center items-center flex-col h-screen gap-6">
        <div>
          <h1 className="text-4xl">useState Challenge</h1>
          <p>{`Count: ${value}`}</p>

          <p>
            Step{" "}
            <input
              type="number"
              value={steps}
              onChange={handleInputChange}
              className="text-black border-2 border-red-400 rounded px-2"
            />
          </p>
        </div>

        <div className="flex gap-6">
          <button
            className="text-white border-4 border-red-400 p-2 rounded-xl"
            onClick={() => setValue(value + steps)}
          >
            Increment
          </button>

          <button
            className="text-white border-4 border-red-400 p-2 rounded-xl"
            onClick={() => setValue(value - steps)}
          >
            Decrement
          </button>

          <button
            className="text-white border-4 border-red-400 p-2 rounded-xl"
            onClick={() => setValue(0)}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
};
