import { useRef } from "react"

export const Tut61UseRef=()=>{

    // We shouldn't use this to get the data
    // const userName=document.getElementById("username")
    // const password=document.getElementById("password")


    // Correct way to store the data.
    const userName=useRef(null)  // Initial vale "null"
    const password=useRef(null)

    console.log(userName)  // Initial value "null"

    function handleSubmit(e){
        e.preventDefault()
        console.log(userName.current.value,password.current.value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="username" ref={userName} className="border-2 border-red-400"/>
            <br />
            <input type="password" id="password" ref={password} className="border-2 border-blue-500"/>
            <br />
            <button>Submit</button>
        </form>
        </>
    )
}