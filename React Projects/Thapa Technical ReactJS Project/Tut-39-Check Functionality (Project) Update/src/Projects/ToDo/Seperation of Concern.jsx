import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";

export const Project4 = () => {
  const [task, setTask] = useState([]);


  // Lifting StateUp concept
  const handleFormSubmit = (inputValue) => {
    // Destructuring the objects
    const {id,content,checked} = inputValue

    // ## It check if the input field is empty
    if (!content) return;

    // ## It checks if the task already exists
    // if (task.includes(content)) {
    const ifToDoContentMatched = task.find((currTask)=> currTask.content === content)

    if(ifToDoContentMatched){
      alert("The task is already written");
      setInputValue((prev) => ({
        ...prev,
        content:""
      }));
      return; //  Stop execution if task exists
    }

     // Append new task to the list
     setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }


  // Project 3: Deleting all the task at once
  function clearTask() {
    setTask([]);
  }

  // Project 3: Delete Single Task
  function handleDeleteToDo(clickedItem) {
    // It creates the new array by filtering(removing) the clicked one
    setTask((prevTask) => prevTask.filter((task) => task.content !== clickedItem));
  }


  // Tut 39
  function handleCheckedToDo(checkedTask){
      const updatedTask=task.map((currTask)=>{
        if(currTask.content === checkedTask){
          // checked ma vako value lai uulta gardincha
          return{...currTask, checked: !currTask.checked}
        }
        else{
          return currTask
        }
      })

      // It updates the checked Value from "false" to "true"
      setTask(updatedTask)
  }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>

        {/*Project4: Seperating the components */}
        <ToDoDate />

        <TodoForm onFormSubmit={handleFormSubmit} />
        <ul>
          {task.map((currTask) => {
            return(
                <ToDoList onDeleteBtn={handleDeleteToDo} index={currTask.id} currTask={currTask.content} onCheckedBtn={handleCheckedToDo}
                checked={currTask.checked}/>
            )
          })}
        </ul>

        <span
          className="bg-red-400 text-slate-900 cursor-pointer"
          onClick={clearTask}
        >
          Clear All
        </span>
      </section>
    </>
  );
};
