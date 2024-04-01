import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { Button } from "@mui/material";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Button color="inherit">
        <NavLink to={"/register"}>Registration </NavLink>
      </Button>

      <Button color="inherit">
        {!isLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
      </Button>
    </div>
  );
};

export default AuthNav;
