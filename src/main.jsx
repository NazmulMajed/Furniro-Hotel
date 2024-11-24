import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PageError from "./components/shared/PageError";
import Shop from "./components/shop/Shop";
import ShowShop from "./components/shop/ShowShop";
import Portfolio from "./components/portfolio/Portfolio";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { SiNginx } from "react-icons/si";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Common layout
    children: [
      {
        path: "/",
        element: <Home />, // Home page
      },
      {
        path: "/portfolio",
        element: <Portfolio />, // Portfolio page
      },
      {
        path: "/about",
        element: <About />, // About page
      },
      {
        path: "/shop",
        element: <Shop />, // Shop page
      },
      {
        path: "/shop show",
        element: <ShowShop />, // ShowShop subpage
      },
      {
        path: "/hotelroom",
        element: <HotelRoom />, // ShowShop subpage
      },
      {
        path: "/newarrival",
        element: <NewArrival />,
        // ShowShop subpage
      },
      {
        path: "/signin",
        element: <SignIn />,
        // ShowShop subpage
      },
    ],
  },
  {
    path: "*",
    element: <PageError />, // 404 or Page Not Found
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
