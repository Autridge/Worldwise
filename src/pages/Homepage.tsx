import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <section className="px-25 py-12">
      <PageNav />
      <div className="flex items-center justify-center gap-10 ">
        {/* <PageNav /> */}
        <h1 className="text-8xl font-bold">
          You travel the World, WorldWise keeps track of your adventures
        </h1>
        <p className="text-xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world
        </p>
      </div>
      <div className="mt-10">
        <Link to="/app" className="links">
          Start Tracking Now
        </Link>
      </div>
    </section>
  );
}
