import { useEffect, useState } from "react"

export const Tut53UseEffectChallenge=()=>{
    const [value,setValue]=useState("")
    const [count,setCount]=useState(0)

    function updateValue(dataValue){
            setValue(dataValue)
    }

    useEffect(()=>{
        console.log(value)
    },[value])


    function handleIncrement(dataCount){
        setCount(count + dataCount)
    }

    useEffect(()=>{
       document.title = `Count: ${count}`
    },[count])

    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen bg-blue-900 text-white gap-6">
                <h1 className="font-bold text-3xl">useEffect Challenge</h1>

                <div className="flex flex-col items-center">
                    <p>Count {count}</p>
                    <button className="bg-green-400 p-1 rounded-md" onClick={()=>handleIncrement(1)}>Increment</button>
                </div>

                <div className="flex flex-col items-center">
                <p>Name {value}</p>
                <input type="text" className="border-2 text-black" onChange={(e)=>updateValue(e.target.value)} value={value}/>
                </div>
                
            </div>
        </>
    )
}