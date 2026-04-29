import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className="bg-[#31363F] rounded w-200 p-2"
      onClick={() => {
        navigate("form");
      }}
    >
      <p>Map</p>
      <p>
        Postion: {lat}, {lng}
      </p>

      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}
