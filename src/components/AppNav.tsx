import { NavLink } from "react-router-dom";
import React from "react";

export default function AppNav() {
  return (
    <nav>
      <ul className="flex gap-3 w-44 items-center justify-between uppercase bg-secondary-foreground p-2 rounded-xl text-white">
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
