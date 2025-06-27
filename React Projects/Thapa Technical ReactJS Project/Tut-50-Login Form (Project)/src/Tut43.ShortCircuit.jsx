import { useState } from "react"

const ShortCircuitExample =()=> {

    const [isLoggedIn,setIsLoggedIn]=useState(true)
    const [user,setUser] = useState("")

    return (
        <section className="flex justify-center items-center flex-col h-screen gap-20">
            <h1 className="text-black">Welcome to the ShortCircuit Evaluation</h1>

            {/* Conditional Renders */}
           {isLoggedIn && <p className="text-2xl">You are logged in!</p> }
            {user ? `Hello ${user} `: "Please Log In !!"}
            

            {/* Buttons */}
            <div className="flex gap-2">
                <button className="text-white p-2 w-56" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button className="text-white p-2 w-56" onClick={()=> setUser('Reason Khadgi')}>Set User</button>
                <button className="text-white p-2 w-56" onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    )
}

export default ShortCircuitExample