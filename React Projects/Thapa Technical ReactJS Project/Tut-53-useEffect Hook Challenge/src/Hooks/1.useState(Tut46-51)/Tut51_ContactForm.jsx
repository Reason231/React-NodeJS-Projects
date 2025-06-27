import { useState } from "react"

// In today's code, we are retriving the data from the form.
export const Tut51Contact=()=>{
    const [userData,setUserData]=useState({
        userName:"",
        password:"",
        message:""
    })

    function handleInput(e){
        const {name,value}=e.target
        setUserData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(userData) 

        // Clearing the input field after submission in the basic forms (like Contact,Feedback,Comment Box).
        // You do want to clear inputs after submission, because:
        // The user is staying on the same page.
        // They might want to submit another form.
        setUserData({
            userName:"",
            password:"",
            message:""
        })
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col gap-4 border-2 border-gray-600 rounded-md p-3">
                    <h1 className="text-3xl font-bold">Contact Form</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label htmlFor="userName">
                            UserName
                        </label>
                        <input type="text" name="userName" id="userName" required autoComplete="on" className="border-2 bg-gray-200 rounded-sm" value={userData.userName} onChange={handleInput}/>

                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" required autoComplete="on" className="border-2 bg-gray-200 rounded-sm" value={userData.password} onChange={handleInput}/>

                        <label htmlFor="message">Message</label>
                            <textarea name="message" id="text" className="border-2 bg-gray-200 rounded-sm resize-none" rows="5" value={userData.message} onChange={handleInput}/>

                        <button type="submit" className="w-full bg-blue-400 rounded-sm text-white hover:bg-yellow-400 transition delay-75 ease-in-out">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}