// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";

import css from "./ContactForm.module.css";
import { FaUserPlus, FaPhone, FaUser } from "react-icons/fa6";

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Please enter your name. Minimum length of three characters.")
    .max(50, "Too long!")
    .required("This field is required"),
  number: Yup.string()
    .min(
      10,
      "Please enter your phone number. The minimum length is ten digits without a dash/thirteen with a dash."
    )
    .max(13, "Too long!")
    .required("This field is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactShema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.labelName}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} name="name" id={nameId} />
          <FaUser className={css.icon} />
          <span className={css.message}>
            <ErrorMessage name="name" />
          </span>
        </div>
        <div className={css.labelNumber}>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.field} name="number" id={numberId} />
          <FaPhone className={css.icon} />
          <span className={css.message}>
            <ErrorMessage name="number" />
          </span>
        </div>
        <button className={css.btn} type="submit">
          <FaUserPlus />
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
