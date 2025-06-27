import { use, useReducer } from "react"

export const Tut69UseReducer=()=>{

    // state=> currentState
    const reducer=(state,action)=>{
        console.log(state,action)

        if(action.type === "INCREMENT"){
            return state + 1
        }
        if(action.type === "DECREMENT"){
            return state - 1
        }
    }

    // 2nd argument is the initial value
    const [count,dispatch]=useReducer(reducer,0)
    // console.log(useReducer(reducer,0))
    
    return(
        <>
            <div className="flex flex-col">
                <h1>{count}</h1>
                {/* It sends the action to the reducer function */}
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            </div>
        </>
    )
}