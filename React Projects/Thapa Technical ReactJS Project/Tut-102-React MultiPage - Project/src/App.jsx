import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path:"country/:id",
        element:<CountryDetails />
      },
      {
        path: "contact",
        element: <Contact />,
        action:contactData
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
