import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import CheckAuth from "./components/common/check-auth";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { AdminLayout } from "./components/admin-view/layout";
import { Check } from "lucide-react";
import { AdminDashboard } from "./pages/admin-view/dashboard";
import { ShoppingLayout } from "./components/shopping-view/layout";
import { UnAuthPage } from "./pages/unauth-page";
import { NotFound } from "./pages/not-found/not-found";
import { Skeleton } from "./components/ui/skeleton";
import { AdminProducts } from "./pages/admin-view/products";
import { AdminOrder } from "./pages/admin-view/orders";

function App() {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if(isLoading) return <Skeleton className="h-screen w-screen bg-black"/>

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="register" element={<AuthRegister />}></Route>
          <Route path="login" element={<AuthLogin />}></Route>
        </Route>

        <Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="products" element={<AdminProducts/>}></Route>
            <Route path="orders" element={<AdminOrder/>}></Route>
          </Route>
        </Route>

        <Route>
          <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout/></CheckAuth>}>
            <Route path="home"></Route>
          </Route>
        </Route>

        <Route path="/unauth-page" element={<UnAuthPage />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  );
}

export default App;
