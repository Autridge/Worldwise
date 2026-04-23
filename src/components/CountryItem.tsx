import React from "react";

export default function CountryItem({ country }) {
  return (
    <li className="flex flex-col justify-between items-center gap-2 bg-secondary-foreground text-white p-3 rounded-md border-l-4 border-brandGr mb-2 mt-1">
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
