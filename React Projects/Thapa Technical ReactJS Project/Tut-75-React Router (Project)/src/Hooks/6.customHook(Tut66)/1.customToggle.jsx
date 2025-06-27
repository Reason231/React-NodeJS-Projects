
import { useState } from "react"

export const CustomToggle=()=>{

    const useToggle=(initialValue=false)=>{
        const [stateValue,setStateValue]=useState(initialValue) // holds the value
        const toggleFunction =()=> setStateValue(prev => !prev)   // function
        return [stateValue,toggleFunction]
    }


    // isVisible holds the current value (true or false).
    // toggleVisible is the function that switches isVisible.
    const [isVisible,toggleVisible]=useToggle()
    return(
        <>
           <button onClick={toggleVisible} className="border px-2 py-1 mt-2">
            Toggle Text
           </button>

           {isVisible && <p>This text is toggled</p>}
        </>
    )
}


