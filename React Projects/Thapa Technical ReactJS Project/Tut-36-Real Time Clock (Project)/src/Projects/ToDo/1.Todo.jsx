import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

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

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>Todo List</h1>
                </header>

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
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
};
