import { Outlet } from "react-router-dom"

export const AuthLayout=()=>{
    return(
        <div className="h-screen w-full flex">
            <div className="bg-black w-1/2 h-screen">
            </div>
            <div className="w-1/2 flex flex-col items-center h-screen">
                <Outlet />
            </div>
        </div>
    )
}