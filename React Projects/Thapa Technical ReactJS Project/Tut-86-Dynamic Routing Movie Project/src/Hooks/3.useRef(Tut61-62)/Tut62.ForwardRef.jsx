import { forwardRef, useId, useRef } from "react"

// Parent component
export const Tut62Forward=()=>{
    const username=useRef(null)
    const password=useRef(null)

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log(username.current.value,password.current.value)
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username} />
            <BeforeReact19Input label="password" ref={password}/>
            <button>Submit</button>
        </form>
    )
}


// Child Component
// Before React v.19: Using the forward Ref
// const BeforeReact19Input=forwardRef((props,ref)=>{
//     const id=useId()
//     return(
//         <>
//             <label htmlFor={id}>{props.label}</label>

//             {/* Without using the forwardRef, we can't get the ref props.*/}
//             <input type="text" ref={ref} className="border-2 border-red-600 ml-2"/>

//         </>
//     )
// })


// After React v.19: Without using the forward Ref
const BeforeReact19Input=(props)=>{
    const id=useId()
    return(
        <>
            <label htmlFor={id}>{props.label}</label>

            {/* Now we can get the ref through the props..*/}
            <input type="text" ref={props.ref} className="border-2 border-red-600 ml-2"/>

        </>
    )
}