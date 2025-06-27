import { useEffect, useState } from "react"

export const Tut52UseEffect=()=>{
    // Example 1
    // It will run once on mount (initial render).
    // It runs again on every re-render (e.g., if state or props change).
    // console.log("Normal console runs every time")

    // Example 1
    // Logs only once on mount (initial render)
    useEffect(()=>{
        console.log("Use Effect runs only once due to empty dependency array")
    },[])   // empty dependency array



    // Example 2 : Logs once while the component(state) re-renders every time.
    const [count,setCount]=useState(0)
    
    // It won't log the result due to useEffect empty dependency 
    useEffect(()=>{
        console.log("Empty Dependency of Count ",count)
    },[])



    // Example 3: Logs every time while the components(state) re-renders every tiem
    useEffect(()=>{
        console.log("Non-Empty Dependency Count ",count)
    },[count])



    // Example 4: Creating Time Clock
    const [time,setTime]=useState(0)
    
    // useEffect runs only once (because of the empty dependency array).
    // Inside it, setInterval is set up to run every second.
    // Even though setInterval runs repeatedly, useEffect does NOT re-run,
    // and only ONE interval is created.
    // This prevents multiple intervals from being set on every render.
    // React will re-render only this component (and its children) — not the whole page.
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            let updatedTime=new Date()
            setTime(updatedTime.toLocaleTimeString())
        },1000)

        // Clears the interval so that it won't stack up.
        return () => clearInterval(intervalId)
    },[])



    return(
        <>
            <h1>Hello,useEffect!</h1>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)} className="bg-red-500">Increment</button>

            <p>Time Clock Example 3</p>
            <h1>Date: {time}</h1>
        </>
    )
}