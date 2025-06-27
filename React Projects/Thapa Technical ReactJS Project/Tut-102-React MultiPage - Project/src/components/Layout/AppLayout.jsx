import { Outlet, useNavigation } from "react-router-dom"
import { Headers } from "../UI/Header"
import { Footers } from "../UI/Footer"
import { Loader } from "../UI/Loader"

export const AppLayout=()=>{
    const navigation=useNavigation()

    if(navigation.state == "loading") return <p>Loading...</p>
    return(
        <div className="grid gap-32">
        <Headers />
        <Outlet />
        <Footers />
        </div>
    )
}