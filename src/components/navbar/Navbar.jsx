/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 font-semibold bg-white"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/add-product"}>Add-product</Link>
            </li>
            <li>
              <Link to={`/my-cart/${user?.uid}`}>My-Cart</Link>
            </li>
            {!user ? (
              <div className="md:hidden mt-2 flex flex-col gap-2">
                <Link to={"/login"} className="btn text-white">
                  Login
                </Link>
                <Link to={"/register"} className="btn text-white">
                  Register
                </Link>
              </div>
            ) : (
              <button
                onClick={logout}
                className="mt-5 block md:hidden btn text-white"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
        <div>
          <Link
            to={"/"}
            className="flex justify-center items-center gap-2 cursor-pointer font-bold normal-case text-xl"
          >
            <img
              className="bg-white w-12 h-12 rounded-full object-contain"
              src={logo}
              alt="logo"
            />
            ElecteX
          </Link>
        </div>
      </div>
      {/* large device menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/add-product"}>Add-product</Link>
          </li>
          <li>
            <Link to={`/my-cart/${user?.uid}`}>My-Cart</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="hidden md:flex justify-center items-center gap-2">
            <Link to={"/login"} className="btn text-white">
              Login
            </Link>
            <Link to={"/register"} className="btn text-white">
              Register
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL}
                alt="user-image"
              />
              <span className="hidden md:block text-sm font-semibold">
                {user.displayName}
              </span>
            </div>
            <button onClick={logout} className="hidden md:block btn text-white">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
