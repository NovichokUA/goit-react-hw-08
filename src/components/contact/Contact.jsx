import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { FaPhone, FaUser, FaUserMinus } from "react-icons/fa6";

import { Button, Stack } from "@mui/material";

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.maincontainer}>
      <div className={css.container}>
        <p className={css.title}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.title}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => dispatch(deleteContact(id))}
          variant="contained"
          color="inherit"
          startIcon={<FaUserMinus fontSize="small" />}
          size="small"
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
};
