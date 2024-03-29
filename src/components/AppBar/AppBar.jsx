import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  return (
    <div>
      Hello AppBar
      <NavLink to={"/"}>Home</NavLink>
      <AuthNav />
    </div>
  );
};

export default AppBar;
