import React from "react";
import { NavLink, Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin , FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-1 md:p-8">
      <aside>
        <div>
          <Link to="/" className=" flex items-center gap-x-2.5 text-xl">
            <img src={logo} alt="" />
            <span className="font-bold"> DocTime</span>
          </Link>
        </div>
      </aside>
      <nav className="grid grid-flow-col gap-4 border-b-2 border-dashed border-gray-300 w-3/6 my-3">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li className="font-bold">
            <NavLink
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to="/My-Bookings"
             
            >
              My-Bookings
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to="/Blogs"
             
            >
              Blogs
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
             
              to="/Contact Us"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to='https://web.facebook.com/profile.php?id=100073178942060' target="_blank">
            <FaFacebook size={24}></FaFacebook>
          </Link>
          <Link to='https://www.linkedin.com/in/chibgatullah-minhaz-536149361/' target="_blank">
            <FaLinkedin  size={24}></FaLinkedin>
          </Link>
          <Link to="https://github.com/chibgatullahminhaz" target="_blank">
            <FaGithub size={24}></FaGithub>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
