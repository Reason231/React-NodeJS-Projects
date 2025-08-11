import { useLocation, Navigate} from "react-router-dom"


const CheckAuth=({user,isAuthenticated,children})=>{
    const location=useLocation()
    if(!isAuthenticated && !(location.pathname.includes("login") || location.pathname.includes("register"))){
        return <Navigate to={"/auth/login"}></Navigate>
    }

    if(isAuthenticated && user.role === "admin" && location.pathname.includes("shop")){
        return <Navigate to={"/admin/home"}></Navigate>
    }

    if(isAuthenticated && user.role !== "admin" && location.pathname.includes("admin")){
        return <Navigate to="/unauth-page"></Navigate>
    }

    if(isAuthenticated && (location.pathname.includes("auth/register") || location.pathname.includes("/auth/login"))){
        if(user?.role == "admin"){
            return <Navigate to={"/admin/dashboard"}></Navigate>
        }
        else{
            return <Navigate to={"/shop/home"}></Navigate>
        }
    }

    return(
        <>
        {children}
        </>
    )
}

export default CheckAuth