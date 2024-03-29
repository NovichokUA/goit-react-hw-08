import { useSelector } from "react-redux";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};
export default Contacts;
