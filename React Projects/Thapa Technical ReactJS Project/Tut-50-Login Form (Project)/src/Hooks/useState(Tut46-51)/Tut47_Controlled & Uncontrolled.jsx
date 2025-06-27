import { useState } from "react"

export const Tut47Uncontrolled=()=>{
    function handleSubmit(e){
        e.preventDefault()
        const inputedValue=document.querySelector("#input").value
        console.log(inputedValue)
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h1>UnControlled Component</h1>
            <p>Name: <input type="text" id="input" className="bg-red-500 text-white"/></p>
            <button >Submit</button>
        </form>
        </>
    )
}

export const Tut47_Controlled=()=>{
    const [name,SetName] = useState("")

    function handleChange(e){
        e.preventDefault()
        console.log(name)
    }
    
    return(
        <>
        <form onSubmit={handleChange} className="flex flex-col">
            <h1>UnControlled Component</h1>
            <p>Name: <input type="text"  className="bg-red-500 text-white" value={name} onChange={(e)=>SetName(e.target.value)}/></p>
            <button >Submit</button>
        </form>
        </>
    )
}