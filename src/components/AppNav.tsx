import { NavLink } from "react-router-dom";
import React from "react";

export default function AppNav() {
  return (
    <nav>
      <ul className="flex gap-2 uppercase bg-secondary-foreground p-2 rounded-xl text-white bg-">
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
