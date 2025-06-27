import { useState } from "react";


export const TodoForm=({onFormSubmit})=>{

    const [inputValue, setInputValue] = useState({ id: Date.now(), content: "", checked: false });


        const handleInputChange = (value) => {
          setInputValue({id:Date.now() , content:value , checked:false})
        };


        const handleFormSubmit = (event) => {
            event.preventDefault()
            onFormSubmit(inputValue)
            setInputValue({id:"",content:"" , checked:false})
        }
      
            
    return(
        <>
            <section className="form">
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        className="todo-input"
                                        autoComplete="off"

                                        // Yesle content matra lincha rather than the whole object
                                        value={inputValue.content}
                                        onChange={(event) => handleInputChange(event.target.value)}
                                    />
                                </div>
        
                                <div>
                                    <button type="submit" className="todo-btn">Add Task</button>
                                </div>
                            </form>
                        </section>
        </>
    )
}