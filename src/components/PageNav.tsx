import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className="flex items-center justify-between bg-[#3a2525] border-2 border-[#7fbd5856] p-2 rounded-[50rem] mb-10">
      <Logo />

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
