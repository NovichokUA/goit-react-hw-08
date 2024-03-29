import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import { fetchContacts } from "./redux/contacts/operations";
import {
  selectError,
  selectLoading,
  selectFilteredContacts,
} from "./redux/contacts/selectors";

import { Toaster } from "react-hot-toast";
import css from "../src/App.module.css";

export function App() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
      {loading && <Loader>Loading Message</Loader>}
      {error && <ErrorMessage message={error} />}
      <Toaster />
    </div>
  );
}
