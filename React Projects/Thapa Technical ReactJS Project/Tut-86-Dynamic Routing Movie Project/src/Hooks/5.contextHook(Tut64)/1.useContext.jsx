// Note: The data's are passed from the 1.useContext to the 2.useContextMain

import { createContext } from "react"
    // Step 1: Context creation
    // createContext returns a Context component, not a variable
    // The first letter of the Context Component's name must be uppercase
    export const BioContext=createContext()


    // Step 2: 
    // children means the childComponents(Tut64ContextMain) which are wrap inside it in the main.jsx file.
    export const BioProvider=({children})=>{
        const myName="Reason"
        const myAge=30
        console.log(children)

        return <BioContext.Provider value={{myName,myAge}}>
            {/* children are the components which is inside the bioProvider in the useContextMain file */}
            {children}
        </BioContext.Provider>
    }