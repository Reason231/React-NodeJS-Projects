import { useEffect, useState } from "react"

export const Practice=()=>{
    const [timer,setTimer] = useState("") 

    const timeDate = new Date()
    const date=timeDate.toLocaleDateString()
    const time=timeDate.toLocaleTimeString()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(time)
        },1000)
        
        return () => clearInterval(interval)
    },[])

    return(
        <>
        <h1>{date} - {time}</h1>
        </>
    )
}