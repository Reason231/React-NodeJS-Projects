import { useState } from "react"

export const LiftingState=()=>{
    // We have to write here in order to pass from oneChild to anotherChild
    const [inputValue,setInputValue] = useState("")
    return(
        <>
        <InputCompnent inputedValue={inputValue} setInputedValue={setInputValue}/>
        <DisplayCommponent inputedValue={inputValue}/>
        </>
    )
}

const InputCompnent=({inputedValue,setInputedValue})=>{
    
    return(
        <>
        <br />
        <p>From the Lifting State</p>

        {/* What we write in the input, it will update the useState and now we have to pass to another childComponent*/}
        <input type="text" placeholder="Enter you Name" value={inputedValue} onChange={(e) => setInputedValue(e.target.value)}>
        </input>
        </>
    )
}

const DisplayCommponent=({inputedValue})=>{
    return (
        <>
        {/* Here we got the previousChildComponent value to this ChildComponent from the ParentComponent */}
        <p>The currnet value is: {inputedValue}</p>
        </>
    ) 
}