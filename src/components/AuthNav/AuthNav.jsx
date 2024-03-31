import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <NavLink to={"/register"}>Registration </NavLink>
      {!isLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
    </div>
  );
};

export default AuthNav;
