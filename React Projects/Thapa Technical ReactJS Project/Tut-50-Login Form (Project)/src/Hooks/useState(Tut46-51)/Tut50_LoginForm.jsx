import { useState } from "react"

// In today's code, we are retriving the data from the form.
export const Tut50Login=()=>{
    const [userData,setUserData]=useState({
        userName:"",
        password:""
    })

    function handleInput(e){
        const {name,value}=e.target
        setUserData((prev)=> ({
            ...prev,
            [name]:value // dynamic key: updates userName or password

        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(userData); 
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col gap-4 border-2 border-gray-600 rounded-md p-3">
                    <h1 className="text-3xl font-bold">Login Form</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label htmlFor="userName">
                            UserName
                        </label>
                        <input type="text" name="userName" id="userName" required autoComplete="off" className="border-2 bg-gray-200 rounded-sm" value={userData.userName} onChange={handleInput}/>

                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" required autoComplete="off" className="border-2 bg-gray-200 rounded-sm" value={userData.password} onChange={handleInput}/>

                        <button type="submit" className="w-full bg-blue-400 rounded-sm text-white hover:bg-yellow-400 transition delay-75 ease-in-out">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}