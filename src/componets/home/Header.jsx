import { NavLink } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const links = (
    <>
      <li className="text-sm font-medium mr-6">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-sm font-medium mr-6">
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li className="text-sm font-medium mr-6">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-sm font-medium mr-6">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
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
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src="/src/assets/Meubel House_Logos-05.png" alt="" />
        <h2 className="text-4xl font-bold">Furniro</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end text-2xl gap-2 md:text-3xl md:gap-8 ">
        <GrUserManager></GrUserManager>
        <FiSearch></FiSearch>
        <FaRegHeart></FaRegHeart>
        <MdShoppingCart></MdShoppingCart>
      </div>
    </div>
  );
};

export default Header;
