import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";

export default function AppLayout() {
  return (
    <section className="flex ">
      <SideBar />
      <Map />
    </section>
  );
}
