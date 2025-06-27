import { useState } from "react";

export function DerivedState() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 }
  ]);

  // Here userCountvariable becomes the derivedState as it is itself a state
  const userCount = users.length;
  const avgAge=users.reduce((accumulator,currElem) => 
    // 0 is the inital value for the acc
    accumulator+currElem.age,0
) / userCount

  return (
    <>
      <div>
        {userCount} from the derivedState.jsx
        <br />
        {avgAge} from the derivedState.jsx
      </div>
    </>
  );
}
