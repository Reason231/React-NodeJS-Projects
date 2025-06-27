import { useEffect } from "react"
import { useState } from "react"

export const Tut56FetchApi=()=>{
    const [apiData,setApiData]=useState([])

    // Method 1: Fetching api through the traditional promises
    // Note: Read Note1 of readme.md file
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>res.json())
    //     .then((data)=> {
    //         setApiData(data)
    //     })
    //     .catch((error)=>console.log(error))
    // },[])


    // Method 2: Fetching api through the async/await 
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                // Note: Read Note2 of readme.md file for the explanation of await use
                const res=await fetch("https://jsonplaceholder.typicode.com/posts")
                const data=await res.json()
                setApiData(data)
            }
            catch(e){
                console.log(e)
            }
        }

        // Note:  You cannot access that function from outside the useEffect() because it's not in the component’s main scope, it’s just a local function inside that block.
        fetchData()
    },[])
    console.log(apiData)

    
    return(
        <>
            <div>
               {apiData.map((currData)=>(
                <li key={currData.id}>
                    {currData.title}
                    </li>
               ))}
            </div>
        </>
    )
}