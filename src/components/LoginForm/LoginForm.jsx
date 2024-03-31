import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(value, actions) => {
        dispatch(logIn(value));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field name="email" />
        </label>
        <span>
          <ErrorMessage name="email" />
        </span>

        <label>
          Password
          <Field name="password" />
        </label>
        <span>
          <ErrorMessage name="password" />
        </span>
        <button>Hello</button>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
