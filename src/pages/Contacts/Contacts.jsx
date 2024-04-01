import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

import { styled } from "@mui/material/styles";

import css from "./Contacts.module.css";
import { Box } from "@mui/material";

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: 8,
});

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ display: "flex" }}>
      <div className={css.mainContainer}>
        <ContactForm />
        <SearchBox />
        {contacts.length > 0 && <ContactList />}
      </div>
      <div>
        <Image
          src="https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg"
          alt="phone"
        />
      </div>
    </Box>
  );
};
export default Contacts;
