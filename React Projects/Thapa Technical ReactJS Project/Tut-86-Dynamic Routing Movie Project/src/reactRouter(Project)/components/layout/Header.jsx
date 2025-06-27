import React from "react";
import { BiColor } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const Header = () => {

    // Active Links Method 2 function one
    const getNavLinkStyle = ({ isActive }) => {
        return `${isActive ? "text-blue-600" : "text-white"} hover:text-orange-500 transition`;
      };
      

  return (
    <header className="w-full bg-black text-white shadow-lg">
      {/* Top Bar */}
      <section className="flex items-center justify-between border-b border-gray-800 px-6 py-3">
        <div className="text-xl font-semibold tracking-wide">
          Reason E-Commerce Website
        </div>

        <div className="flex items-center space-x-6">
          <NavLink to="SignIn" className="transition hover:text-orange-500">
            SIGN IN
          </NavLink>
          <NavLink to="SingUp" className="transition hover:text-orange-500">
            SIGN UP
          </NavLink>
        </div>
      </section>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide text-white">
          <NavLink to="index">ReasonFlix</NavLink>
        </div>

        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <NavLink
                to="/"
                // Method 1
                className={({ isActive }) =>
                  `${isActive ? "text-blue-600" : "text-white"} transition hover:text-orange-500`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="movie" className={getNavLinkStyle}>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="transition hover:text-orange-500"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="transition hover:text-orange-500">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
