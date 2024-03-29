import { useSelector } from "react-redux";
import { Contact } from "../contact/Contact.jsx";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";
// import { selectNameFilter } from "../../redux/filtersSlice.js";

export default function ContactList() {
  // const selectedNameFilter = useSelector(selectNameFilter);
  const contacts = useSelector(selectFilteredContacts);

  // const filterContact = () => {
  //   return contacts.filter((user) =>
  //     user.name
  //       .toLowerCase()
  //       .trim()
  //       .includes(selectedNameFilter.toLowerCase().trim())
  //   );
  // };

  // const filteredContact = filterContact();

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
