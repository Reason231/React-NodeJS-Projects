import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading"

const AppLayout=()=>{
    const navigation=useNavigation()
    // console.log(navigation)  // Go to homePage and refresh

    if(navigation.state === "loading") return <h1><Loading /></h1>


    return(
        <>
        <Header />
        {/* Outlet contains the dynamic children components */}
        <Outlet />
        <Footer />
        </>
    )
}

export default AppLayout