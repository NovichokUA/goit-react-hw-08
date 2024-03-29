import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { FaPhone, FaUser, FaUserMinus } from "react-icons/fa6";

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.maincontainer}>
      <div className={css.container}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        <FaUserMinus className={css.icon} />
        Delete
      </button>
    </div>
  );
};
