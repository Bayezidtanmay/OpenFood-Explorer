import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import RestaurantDetails from "../pages/RestaurantDetails";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);