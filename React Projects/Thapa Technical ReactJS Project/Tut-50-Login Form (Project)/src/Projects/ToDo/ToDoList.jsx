import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({onDeleteBtn,currTask,checked,onCheckedBtn}) => {
  return (
    <>
    
          <li className="todo-item">
            <span className={checked ? "line-through" : ""}>{currTask}</span>
            <button className="check-btn" onClick={()=>{onCheckedBtn(currTask)}}>
              <MdCheck />
            </button>

            {/* Project 3: Delete functionality */}
            <button
              className="delete-btn"
              onClick={() => onDeleteBtn(currTask)}
            >
              <MdDeleteForever />
            </button>
          </li>
       
    </>
  );
};
