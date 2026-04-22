import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img className="w-50" src={logo} alt="" />
    </Link>
  );
}

export default Logo;
