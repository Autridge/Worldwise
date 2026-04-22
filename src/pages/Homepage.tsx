import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import GradientText from "../components/GradientText";

export default function Homepage() {
  return (
    <section className="px-25 py-12">
      <PageNav />
      <div className="flex items-center justify-center gap-10 ">
        {/* <PageNav /> */}
        <GradientText
          colors={["#211832", "#3a2525", "#7fbd58"]}
          animationSpeed={8}
          showBorder={false}
          className="text-8xl font-bold"
        >
          You travel the World, WorldWise keeps track of your adventures
        </GradientText>

        <p className="text-xl text-[#3a2525]">
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
