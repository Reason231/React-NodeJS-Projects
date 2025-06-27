import { useReducer } from "react";

export const Tut70UseReducer = () => {
  // The initialValue is in the object now.
  const initialState = {
    count: 0,
    inc: 2,
    dec:2
  };

  const reducer = (state, action) => {
    console.log(state, action);

    // best practice
    switch (action.type) {
      case "INCREMENT":
        return {
          // Yesle inc ra dec value lai same rakhirakhcha
          ...state,
          // Yesle purano value lai liyera add garcha
          count: state.count + state.inc,
        };
      case "DECREMENT":
        return {
          ...state,
           count: state.count - state.dec };
      case "RESET":
        // Yesle inital count value k ho tyo lincha mathi bata
        return {
          ...state,
          count:0
        }

      default:
        return state;
    }
  };

  // Best Practice for the initialValue
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="flex flex-col">
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};
