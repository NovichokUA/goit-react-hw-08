import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";

import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

import { fetchContacts } from "../redux/contacts/operations";
import {
  selectError,
  selectLoading,
  // selectFilteredContacts,
} from "../redux/contacts/selectors";

import { Toaster } from "react-hot-toast";
import css from "../components/App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
// import Registration from "../pages/Registration/Registration";
import Loyout from "./Layout";

const Registration = lazy(() => import("../pages/Registration/Registration"));

export function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.mainContainer}>
      <Loyout>
        <h1 className={css.title}>Phonebook</h1>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </Suspense>
      </Loyout>

      {loading && <Loader>Loading Message</Loader>}
      {error && <ErrorMessage message={error} />}
      <Toaster />
    </div>
  );
}
