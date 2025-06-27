export const EventHandling = () => {
  function handleClick(event) {
    alert("I am from EventHandling.jsx file");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
  }

  const handleWelcomeUser = (data) => {
    console.log(`I am from ${data} `);
  };

  return (
    <>
      <button
        onClick={handleClick}
        class="border-none bg-blue-400 p-2 border-r-4 ml-14"
      >
        I am Click Event Handler.jsx
      </button>

      {/* Passing argument to a fuction by fat Arrow function*/}
      <button
        onClick={() => handleWelcomeUser("Reason")}
        class="border-none bg-blue-400 p-2 border-r-4 ml-20"
      >
        Argument Passer Button From Event Handler.jsx
      </button>
    </>
  );
};
