// import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";

import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

// import { fetchContacts } from "../redux/contacts/operations";
// import
// selectError,
// selectLoading,
// selectFilteredContacts,
// "../redux/contacts/selectors";

import { selectError, selectLoading } from "../redux/contacts/selectors";

import { Toaster } from "react-hot-toast";
import css from "../components/App.module.css";
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import Contacts from "../pages/Contacts/Contacts";
// import Login from "../pages/Login/Login";
// import Registration from "../pages/Registration/Registration";
import Loyout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivatRoute } from "./PrivateRoute";

const Registration = lazy(() => import("../pages/Registration/Registration"));
const Home = lazy(() => import("../pages/Home/Home"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const Login = lazy(() => import("../pages/Login/Login"));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div className={css.mainContainer}>
      <Loyout>
        <h1 className={css.title}>Phonebook</h1>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<RestrictedRoute component={<Login />} />}
              />
              <Route
                path="/register"
                element={<RestrictedRoute component={<Registration />} />}
              />
              <Route
                path="/contacts"
                element={<PrivatRoute component={<Contacts />} />}
              />
            </Routes>
          </Suspense>
        )}
      </Loyout>

      {loading && <Loader>Loading Message</Loader>}
      {error && <ErrorMessage message={error} />}
      <Toaster />
    </div>
  );
}
