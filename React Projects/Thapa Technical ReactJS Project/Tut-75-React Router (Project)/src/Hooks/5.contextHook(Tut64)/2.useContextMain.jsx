import { useContext } from "react"
import { BioContext } from "./1.useContext"

export const Tut64ContextMain=()=>{
    const {myName,myAge} = useContext(BioContext)
    return(
        <>
        <h1>Hello Context API. This data's are passed one {myName} & {myAge}</h1>
        </>
    )
}