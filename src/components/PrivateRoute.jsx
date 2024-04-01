import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const redirect = !isLoggedIn && !isRefreshing;

  return redirect ? <Navigate to={redirectTo} /> : Component;
};
