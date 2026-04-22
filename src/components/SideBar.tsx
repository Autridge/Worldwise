import React from "react";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

export default function SideBar() {
  return (
    <section className="bg-[#222831] flex flex-col justify-start items-start rounded-md  ">
      <Logo />
      <AppNav />

      <Outlet />

      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc</p>
      </footer>
    </section>
  );
}
