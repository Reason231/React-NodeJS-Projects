import React, { useState } from "react";

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  function toggleValue() {
    setIsOn(!isOn);    // It makes the setIsOn value true which is opposite of isOn false value.
  }

  return (
    <div className="flex justify-center items-center h-screen">

        {/* Background one */}
      <div
        className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-gray-300" // if the isOn value is false then it will show bg-gray
        }`}
        onClick={toggleValue}
      >

        {/* Text One */}
        <div
          className={`w-8 h-8 p-0.5 bg-white rounded-full shadow-md transform transition-transform duration-300 select-none ${
            isOn ? "translate-x-10" : ""  // if the isOn vlaue is false then it won't translate
          }`}
        >
            {isOn ? "On" : "OFF" }
        </div>
      </div>
    </div>
  );
}



