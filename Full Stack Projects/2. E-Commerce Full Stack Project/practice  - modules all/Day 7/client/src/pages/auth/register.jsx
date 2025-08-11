import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      console.log("Registration completed successfully", data);

      if (data?.payload?.success) {
        toast(data.payload.message);
        navigate("/auth/login");
      } else {
        toast.error(data.payload);
      }
    });
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center w-[50dvw] gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Create new Account</h1>
        <p className="text-[14px]">Already have an account <NavLink className={"font-bold hover:underline ml-2"} to={"/auth/login"}>Login</NavLink></p>
        </div>
      <CommonForm
        formControls={registerFormControls}
        onSubmit={onSubmit}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        ></CommonForm>
    </div>
  );
};
export default AuthRegister;
