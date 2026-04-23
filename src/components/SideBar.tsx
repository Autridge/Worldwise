import React from "react";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

export default function SideBar() {
  return (
    <section className="bg-[#222831] p-8 flex flex-col items-center w-120 rounded min-h-screen justify-between">
      <Logo />

      <div className="flex flex-col items-center gap-6 w-full">
        <AppNav />
        <Outlet />
      </div>

      <footer className="text-gray-400 text-xs text-center">
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc</p>
      </footer>
    </section>
  );
}
