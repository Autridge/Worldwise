import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function PageNav() {
  return (
    <nav className="flex items-center justify-between bg-[#3a252592] border-2 border-[#7fbd5856] p-2 rounded-4xl mb-10">
      <NavLink to="/">
        <img className="w-50" src={logo} alt="" />
      </NavLink>

      <ul className="flex gap-10 mr-20 font-bold text-[#f6f4e8] uppercase tracking-wider">
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink className="links text-sm p-3 text-white" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
