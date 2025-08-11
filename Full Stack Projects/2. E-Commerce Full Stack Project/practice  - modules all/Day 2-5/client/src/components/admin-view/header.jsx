import { LogOut, Menu } from "lucide-react"
import { Button } from "../ui/button"

export const AdminHeader = ({setOpen}) =>{
    return(
        <header className="flex h-[3rem]">
            <div className="lg:hidden sm:block">
            <Button onClick={()=>setOpen(true)} className="lg:hidden sm:block">
            <Menu/>
            </Button>
            </div>

            <div className="flex font-semibold justify-end flex-1">
                <LogOut />
                Logout
            </div>
        </header>
    )
}