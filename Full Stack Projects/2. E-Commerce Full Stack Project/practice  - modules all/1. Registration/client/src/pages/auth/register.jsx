import { registerFormControl } from "@/config"
import { registerUser } from "@/store/auth-slice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import CommonForm from "../../components/common/form"


const initialState={
    userName:"",
    email:"",
    password:""
}

export const AuthRegister=()=>{
    const [formData,setFormData]=useState(initialState)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function onSubmit(e){
        e.preventDefault()
        dispatch(registerUser(formData)).then((data) => {
            console.log("Registration completed successfully",data)
            if(data?.payload?.success){
                navigate("/auth/login")
                toast(data.payload.message)
            }else{
                toast.error(data?.payload?.message)
            }
        })


    }
    return(
        <div>
            <div>
                <h1>Create New Account</h1>
                <p>Already have an account</p>
                <Link to={"/auth/login"} className="hover:underline">
                    Login
                </Link>
            </div>

            <CommonForm formControls={registerFormControl} buttonText={"Sing Up"} formData={formData} setFormData={setFormData} onSubmit={onSubmit}/>
        </div>
    )
}