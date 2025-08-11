import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();
  console.log("I am here")
  return (
    <nav className="flex flex-col gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="flex text-2xl items-center gap-3"
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
        >
          {menuItem.icon}
          <h1 className="">{menuItem.label}</h1>
        </div>
      ))}
    </nav>
  );
};

const AdminSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="h-full flex flex-col">
            <SheetHeader className="border-b">
              <SheetTitle
                className="flex cursor-pointer"
                onClick={() => {
                  navigate("/admin/dashboard");
                  setOpen(false);
                }}
              >
                <ChartNoAxesCombined size={30} />
                <h1>Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>

            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
        </Sheet>

        <aside className="lg:flex flex-col h-screen w-56 text-2xl gap-3 cursor-pointer mt-3 p-5 hidden">
            <div className="flex" onClick={()=>{navigate("/admin/dashboard")}}>
                <ChartNoAxesCombined size={30} />
                <span>Admin Panel</span>
            </div>

            <MenuItems />
        </aside>
    </Fragment>

    
  );
};

export default AdminSideBar;
