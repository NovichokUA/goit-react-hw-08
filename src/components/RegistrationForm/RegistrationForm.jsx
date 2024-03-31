import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Please enter your name. Minimum length of three characters.")
    .max(50, "Too long!")
    .required("This field is required"),
  email: Yup.string()
    .email("Введіть дійсну електронну адресу")
    .required("Електронна адреса обов'язкова"),
  password: Yup.string()
    .min(8, "Пароль повинен містити мінімум 8 символів")
    .matches(/[a-zA-Z]/, "Пароль повинен містити латинські літери")
    .matches(/[0-9]/, "Пароль повинен містити хоча б одну цифру")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Пароль повинен містити хоча б один спеціальний символ"
    )
    .required("Пароль обов'язковий"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field name="name" placeholder="For exemple Valerii" />
        </label>
        <span>
          <ErrorMessage name="name" />
        </span>
        <label>
          Email
          <Field type="email" name="email" placeholder="exemple@mail.com" />
        </label>
        <span>
          <ErrorMessage name="email" />
        </span>
        <label>
          Password
          <Field type="password" name="password" placeholder="123456@jds" />
        </label>
        <span>
          <ErrorMessage name="password" />
        </span>
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
