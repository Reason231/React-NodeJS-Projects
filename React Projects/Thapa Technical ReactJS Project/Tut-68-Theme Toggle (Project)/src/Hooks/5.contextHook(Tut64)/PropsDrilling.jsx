// This is parent component
export const Tut65PropsDrill=()=>{
    return(
        <>
            <h1>Component A</h1>
            <ChildComponent data="React-JS"/>
        </>
    )
}

// Here we don't need the props data but still we need to have it so that we can pass to another child.
const ChildComponent=(props)=>{
    return(
        <>
            <h1>Hello, I am Component B</h1>
            <GrandChildComponent data={props.data}/>
        </>
    )
}

const GrandChildComponent=(props)=>{
    return(
        <>
            <h1>Hello, I am Component C and i got the data {props.data}</h1>
        </>
    )
}