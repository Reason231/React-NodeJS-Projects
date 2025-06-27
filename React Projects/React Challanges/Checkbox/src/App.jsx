import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { name: "Dogs", id: 1, checked: false },
    { name: "Cats", id: 2, checked: false },
    { name: "Cows", id: 3, checked: false },
    { name: "Deer", id: 4, checked: false },
  ]);

  function handleCheck(id) {
    setList(
      list.map((items) => {
        return items.id == id ? { ...items, checked: !items.checked } : items;
      })
    );
  }

  function selectAll() {
    setList(
      // With parentheses({}):
      // 👉 JS knows you mean to return an object.

      // Without parentheses:
      // 👉 JS thinks you’re starting a function body.

      list.map((items) => ({ ...items, checked: true }))
    );
  }

  return (
    <>
      {list.map((currItem, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={currItem.checked}
            onChange={() => handleCheck(currItem.id)}
          />
          <button id="listBtn">{currItem.name}</button>
        </div>
      ))}
      <button onClick={selectAll} id="selectBtn">
        Select All
      </button>
    </>
  );
}

export default App;
