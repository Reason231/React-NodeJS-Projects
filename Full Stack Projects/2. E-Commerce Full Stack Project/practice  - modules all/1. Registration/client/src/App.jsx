import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthLayout } from './components/auth/layout';
import CheckAuth from './components/common/check-auth';
import { AdminDashBoard } from './pages/admin-view/dashboard';
import { AdminOrder } from './pages/admin-view/order';
import { AdminProduct } from './pages/admin-view/prodcuts';
import { AdminLayout } from './components/admin-view/layout';
import { ShoppingLayout } from './components/shopping-view/layout';
import { ShoppingHome } from './pages/shopping-view/home';
import { ShoppingCheckout } from './pages/shopping-view/checkout';
import { ShoppingAccount } from './pages/shopping-view/account';
import { ShoppingListing } from './pages/shopping-view/listing';
import { AuthLogin } from './pages/auth/login';
import { AuthRegister } from './pages/auth/register';
import { NotFoundPage } from './pages/not-found/notFoundPage';
import { UnauthPage } from './pages/unauth-page/unauthPage';


function App(){
    
    const isAuthenticated=true;
    const user={
        name:"Reason",
        role:"user"
    }


  return (
        <div>
            <Routes>
                <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} >
                <AuthLayout />
                </CheckAuth> }
                >
                    <Route path="login" element={<AuthLogin />}></Route>
                    <Route path="register" element={<AuthRegister />}></Route>
                </Route>


                <Route path='/admin' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                    <AdminLayout />
                </CheckAuth>}>
                    <Route path="dashboard" element={<AdminDashBoard />}></Route>
                    <Route path="order" element={<AdminOrder />}></Route>
                    <Route path="product" element={<AdminProduct />}></Route>
                </Route>

                <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                    <ShoppingLayout />
                </CheckAuth>}>
                    <Route path='home' element={<ShoppingHome />}></Route>
                    <Route path='checkout' element={<ShoppingCheckout />}></Route>
                    <Route path='account' element={<ShoppingAccount />}></Route>
                    <Route path='listing' element={<ShoppingListing />}></Route>
                </Route>

                    <Route path='*' element={<NotFoundPage />}></Route>
                    <Route path='/unauth-page' element={<UnauthPage />}></Route>
                
            </Routes>
        </div>
  )
}

export default App
