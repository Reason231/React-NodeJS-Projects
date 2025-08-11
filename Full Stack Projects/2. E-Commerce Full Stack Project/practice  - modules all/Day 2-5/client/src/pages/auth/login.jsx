import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        console.log(data);
        toast(data.payload.message);
      } else {
        toast.error(data.payload.message);
      }
    });
  }

  return (
         <div className="h-screen flex flex-col justify-center items-center w-[50dvw] gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Sign in to your account</h1>
        <p className="text-[14px]">Don't have an account?<NavLink className={"font-bold hover:underline ml-2"} to={"/auth/register"}>Sign up</NavLink></p>
        </div>
      <CommonForm
        formControls={loginFormControls}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign in"}
      />
    </div>
  );
};

export default AuthLogin;
