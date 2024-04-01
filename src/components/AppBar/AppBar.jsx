import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBaR = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <AppBar position="static" sx={{ width: "100vw" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          bgcolor: "#ede7f6",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation />
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
        >
          {!isRefreshing && (
            <div>{isLoggedIn ? <UserMenu /> : <AuthNav />} </div>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBaR;
