import { useEffect,useState} from "react";


export const ToDoDate = () => {
  const [dateTime, setDateTime] = useState("");

  // Project 2: Adding day and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // If the components gets re-rendered then the new interval will start again, which causes the memory leak
    // So this thing stops the present one for the new one.
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* ToDo-Project-Real-Timer */}
      <h2 className="date-time">{dateTime}</h2>
    </>
  );
};
