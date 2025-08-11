import { Outlet } from "react-router-dom"
import { ShoppingHeader } from "./header"

export const ShoppingLayout=()=>{
    return(
        <>
        <ShoppingHeader />
        <Outlet />
        </>
    )
}