import { Outlet } from "react-router-dom"
import { AdminHeader } from "./header"
import { AdminSideBar } from "./sidebar"

export const AdminLayout=()=>{
    return(
        <>
        <AdminHeader />
        <AdminSideBar />
        <Outlet />
        </>
    )
}