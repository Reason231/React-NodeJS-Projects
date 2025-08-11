import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "@radix-ui/react-dropdown-menu";
import { fetchProductDetails } from "@/store/shop/products-slice";

function MenuItems() {
  const navigate=useNavigate()

  // To navigate the header each category, to their filter sections.
  function handleNavigate(getCurrentMenuItem){
    sessionStorage.removeItem("filters")
    const currentFilter = getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
? {
      category:[getCurrentMenuItem.id]
    }: null
    
    sessionStorage.setItem("filters",JSON.stringify(currentFilter))
    navigate(getCurrentMenuItem.path)
  }



  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={()=>(handleNavigate(menuItem))}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
        >
          {menuItem.label}
        </Label>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { user} = useSelector((state) => state.auth);
  // Day 13
  const {cartItems}=useSelector((state)=>state.shopCart)
  const [openCartSheet,setOpenCartSheet]=useState(false)
  const navigate=useNavigate()
  console.log(user);
  const dispatch=useDispatch()

  function handleLogout(){
    dispatch(logoutUser())
  }

  // Day 13
  useEffect(()=>{
    dispatch(fetchCartItems(user?.id))
  },[dispatch])

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">

      {/* Day 12 */}
      {/* Click on the "Cart Icon" beside to the user profile */}
      <Sheet open={openCartSheet} onOpenChange={()=>setOpenCartSheet(false)}>
      <Button onClick={()=>setOpenCartSheet(true)} variant="outline" size="icon">
        <ShoppingCart className="h-6 w-6" />
        <span className="sr-only">User cart</span>
      </Button>

      {/* Day 13 */}
      <UserCartWrapper setOpenCartSheet={setOpenCartSheet} cartItems={cartItems && cartItems.items && cartItems.items.length > 0 ? cartItems.items : []}/>
      </Sheet>


      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account 
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4"/>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-3 md:px-6">
        <Link className="flex items-center gap-2" to="/shop/home">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">E-Commerce</span>
        </Link>

        {/* Hamburger and sidePanel opener for mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
