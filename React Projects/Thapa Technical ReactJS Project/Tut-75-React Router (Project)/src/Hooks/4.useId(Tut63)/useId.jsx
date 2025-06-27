import { useId } from "react"

export const Tut63UseIdHook=()=>{
    // Method 1: Traditional Method
    // const userNameId=useId()
    // const emailId=useId()


    // return(
    //     <form>
    //         <div>
    //             <label htmlFor={userNameId}>UserName</label>
    //             <input type="text" id={userNameId} name="name"/>
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}>Email</label>
    //             <input type="text" id={emailId} name="email"/>
    //         </div>

    //         <button type="submit">Submit</button>
    //     </form>
    // )


    // Method 2: New Method to avoid calling useId for every single element
    const id=useId()

     return(
        <form>
            <div>
                <label htmlFor={id+"userNameId"}>UserName</label>
                <input type="text" id={id+"userNameId"} name="name"/>
            </div>
            <div>
                <label htmlFor={id+"emailId"}>Email</label>
                <input type="text" id={id+"emailId"} name="email"/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}