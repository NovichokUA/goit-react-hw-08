import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Button color="inherit">
        <NavLink to="/">Home</NavLink>
      </Button>

      <Button color="inherit">
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Button>
    </nav>
  );
};
