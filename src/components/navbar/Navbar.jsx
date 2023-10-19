/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-primary text-black z-50 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/add-product"}>Add-product</Link>
            </li>
            <li>
              <Link to={"/my-cart"}>My-Cart</Link>
            </li>
            {!user ? (
              <div className="md:hidden mt-2 flex flex-col gap-2">
                <a className="btn text-white">Login</a>
                <a className="btn text-white">Register</a>
              </div>
            ) : (
              <button className="mt-5 block md:hidden btn text-white">
                Logout
              </button>
            )}
          </ul>
        </div>
        <div>
          <a className="flex justify-center items-center gap-2 cursor-pointer font-bold normal-case text-xl">
            <img
              className="bg-white w-12 h-12 rounded-full object-contain"
              src={logo}
              alt="logo"
            />
            ElecteX
          </a>
        </div>
      </div>
      {/* large device menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/add-product"}>Add-product</Link>
          </li>
          <li>
            <Link to={"/my-cart"}>My-Cart</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="hidden md:flex justify-center items-center gap-2">
            <a className="btn text-white">Login</a>
            <a className="btn text-white">Register</a>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
              alt="user-image"
            />
            <button className="hidden md:block btn text-white">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
