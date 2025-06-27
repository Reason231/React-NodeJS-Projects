import { Tut46 } from "./Tut46_useStateChallange"
import { Tut47Uncontrolled,Tut47_Controlled } from "./Tut47_Controlled & Uncontrolled"
import {Registration} from "./Tut49_Registration_Form"
import { Tut50Login } from "./Tut50_LoginForm"
import { Tut51Contact } from "./Tut51_ContactForm"

export const UseStateMain=()=>{
    return(
        <>
        <Tut46 />
        <Tut47Uncontrolled/>
        <Tut47_Controlled />
        <Registration />
        <Tut50Login />
        <Tut51Contact />
        </>
    )
}