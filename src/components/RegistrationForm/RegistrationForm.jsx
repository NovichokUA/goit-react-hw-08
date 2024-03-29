import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" />
        <label htmlFor="email">Email</label>
        <Field name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" />
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
