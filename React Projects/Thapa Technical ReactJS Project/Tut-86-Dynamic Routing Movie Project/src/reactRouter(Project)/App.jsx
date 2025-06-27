import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "../api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "../api/GetMovieDetails";

export const App = () => {


  // New Method
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, // this means path="/"
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "movie",
          // loader hook
          loader:getMoviesData,
          element: <Movie />,
        },

        // Dynamic Path Tut 85
        {
          path: "movie/:movieID",
          loader:getMovieDetails,
          element: <MovieDetails />
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
