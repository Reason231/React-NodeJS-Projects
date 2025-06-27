export const EventProps = ()=>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey, ${user}`)
    }

    const handleHover=()=>{
        alert("Hey Thanks for hovering")
    }

    return(
        <>

        <WelcomeUser ClickButton={()=> HandleWelcomeUser("Reason")} Hover={handleHover}/>

        </>
    )
}


const WelcomeUser=(props)=>{
    const handleGreeting=()=>{
        console.log("This is the child component")
    }

    return (
        <>
        {/* Yesle aaba mathi ko parentComponent(i.e. HandleWelcomeUser) ko WelcomeUser ko click props lai target garcha */}--
        <button onClick={props.ClickButton}  class="border-none bg-yellow-400 p-2 border-r-4 ml-20" >Click Me From Event Props.jsx</button>
        <button onMouseEnter={props.Hover}  class="border-none bg-yellow-400 p-2 border-r-4 ml-20">Hover Event From Props.jsx</button>

        {/* Yesle chai aaafnai component ko function lai call garcha */}
        <button onClick={handleGreeting} class="border-none bg-yellow-400 p-2 border-r-4 ml-20">Click From Greeing.jsx</button>
        </>
    )
}