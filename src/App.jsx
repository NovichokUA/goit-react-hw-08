import { useDispatch, useSelector } from "react-redux";
import css from "../src/App.module.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import {
  selectError,
  selectLoading,
  selectFilteredContacts,
} from "./redux/contactsSlice";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

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
