import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Project3 = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime,setDateTime] = useState("")


    // Project 1: Simple ToDo
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // It is essential for deleting the task.
        if (!inputValue) return;

        if (task.includes(inputValue)) {
            alert("The task is already written");
            setInputValue("");
            return; //  Stop execution if task exists
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        console.log(task)
        setInputValue(""); // Clear input field after adding
    };


    // Project 2: Adding day and time
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now=new Date()
            const formattedDate=now.toLocaleDateString()
            const formattedTime=now.toLocaleTimeString()
            setDateTime(`${formattedDate} - ${formattedTime}`)
        },1000)

        // If the components gets re-rendered then the new interval will start again, which causes the memory leak
        // So this thing stops the present one for the new one.
        return() => clearInterval(interval) 
    },[])

    // Project 3: Deleting all the task at once
    function clearTask(){
        setTask([])
    }

    // Project 3: Delete Single Task
    function handleDeleteToDo(clickedItem){
        // It creates the new array by filtering(removing) the clicked one
            setTask(prevTask => prevTask.filter(task => task !== clickedItem))
    }
    
    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>Todo List</h1>
                </header>

                {/* ToDo-Project-Real-Timer */}
                <h2 className="date-time">{dateTime}</h2>
                <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                className="todo-input"
                                autoComplete="off"
                                // Each keystroke updates the input state, and value={input} ensures the input field reflects the new value also it is required for making empty input.
                                value={inputValue}
                                onChange={(event) => handleInputChange(event.target.value)}
                            />
                        </div>

                        <div>
                            <button type="submit" className="todo-btn">Add Task</button>
                        </div>
                    </form>
                </section>

                <section className="myUnOrdList">

                    <ul>
                        {task.map((currTask, index) => (  
                            <li key={index} className="todo-item">
                                <span>{currTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>

                                {/* Project 3: Delete functionality */}
                                <button className="delete-btn" onClick={()=>handleDeleteToDo(currTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                <span className="bg-red-400 text-slate-900 cursor-pointer" onClick={clearTask}>Clear All</span>
            </section>
        </>
    );
};
