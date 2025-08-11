import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-black text-white">
        Welcome to E-Commerce Website
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
