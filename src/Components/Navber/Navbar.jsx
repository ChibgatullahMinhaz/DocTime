import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/My-Bookings">My-Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/Blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/Contact Us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className=" flex items-center gap-x-2.5 text-xl">
          <img src={Logo} alt="" />
          <span className="font-bold"> DocTime</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li className="font-bold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/My-Bookings">My-Bookings</NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to="/Blogs"
            
            >
              Blogs
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/Contact Us">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary rounded-2xl font-bold">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
