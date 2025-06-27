import { useState } from "react"

export function UseState(){
    let [count,setCount]=useState(0)

    function handleButtonClick(){
        setCount(()=> count+1)
    }
    return(
        <>
        <h1 className="ml-6">{count}</h1>
        <button onClick={handleButtonClick} class="ml-6 border-r-8 bg-cyan-200" >Increment</button>
        </>
    )
}
