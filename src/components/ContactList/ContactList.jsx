import { useSelector } from "react-redux";
import { Contact } from "../contact/Contact.jsx";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map((user) => {
          return (
            <li key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
