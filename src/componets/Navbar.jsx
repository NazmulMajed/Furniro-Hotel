import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Portfolio from "./portfolio/Portfolio";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 gap-6 mt-50px ">
      {/* Left Side: Brand */}
      <div className=" flex navbar-start gap-[50px]">
        <img
          src="./images/Meubel House_Logos-05.png"
          className="w-auto h-[54px]"
          alt="logo"
        />
        <Link to="/" className=" flex text-[32px]  font-bold btn btn-ghost">
          Furniro
        </Link>

        {/* Center: Links (visible only on large screens) */}
        <div className="mt-[15px] p-1 navbar-center justify-center hidden lg:flex  m-auto  content-center items-cente">
          <ul className="flex menu menu-horizontal px-1 space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Additional Content */}
        <div className="justify-end align-middle">
          {/* Visible on large screens */}
          <div className="   absolute top-[15  px] right-0.5 p-2 flex space-x-1">
            <button className="btn hidden lg:inline-block ">
              <img src="./images/Vector.png" alt="profile png" />
            </button>
            <button className="btn hidden lg:inline-block ">
              <img src="./images/Vector (1).png" alt="search png" />
            </button>
            <button className="btn hidden lg:inline-block ">
              <img src="./images/Vector (2).png" alt="love react" />
            </button>
            <button className="btn hidden lg:inline-block ">
              <img src="./images/Vector (3).png" alt=" addtocard png" />
            </button>
          </div>

          {/* Dropdown for Small Screens */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg> */}
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="justify-center flex mx-auto ">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
      <ImageShow />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Navbar;
