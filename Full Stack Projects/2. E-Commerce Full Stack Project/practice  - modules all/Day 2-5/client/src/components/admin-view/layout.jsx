import { Outlet } from "react-router-dom";
import { AdminHeader } from "./header";
import { useState } from "react";
import AdminSideBar from "./sidebar";

export const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

//   return (
//     <div className="flex min-h-screen w-full">
//       <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />

//       <div className="flex flex-1 flex-col">
//         <AdminHeader setOpen={setOpenSidebar} />

//         <main className="flex-1 flex bg-muted/40 p-3 md:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );

return(
    <div className="flex min-h-screen w-full">
    <AdminSideBar open={openSidebar} setOpen={setOpenSidebar}/>

    <div className="flex-1 flex flex-col">
    <AdminHeader setOpen={setOpenSidebar}/>
    <main className="border-2 bg-muted/40 flex flex-1 p-3 md:p-6">
        <Outlet />
    </main>
    </div>
    </div>
)
};
