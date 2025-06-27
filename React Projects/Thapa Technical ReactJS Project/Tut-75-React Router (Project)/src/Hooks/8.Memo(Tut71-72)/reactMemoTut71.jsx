import { useState } from "react"
import Counts  from "./MemoCountTut71"
export const Tut71ReactMemo=()=>{
    const [count,setCount]=useState(0)

    return(
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
            </div>

            {/* We don't want the child component to be re-rendered due to the change in the parent comonent */}
            <Counts/>
        </>
    )
}