import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import * as Yup from "yup";

import css from "./LoginForm.module.css";

import { Box } from "@mui/material";
import { Button, TextField, Stack } from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters")
    .matches(/[a-zA-Z]/, "The password must contain Latin letters")
    .matches(/[0-9]/, "The password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "The password must contain at least one special character"
    )
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
      autoComplete="off"
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(value, actions) => {
          dispatch(logIn(value));
          actions.resetForm();
        }}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.fieldContainer}>
            <label className={css.label}>
              <Field
                as={TextField}
                label="Email"
                type="Email"
                name="email"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText="Please enter your email."
              />
            </label>
            <span>
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className={css.fieldContainer}>
            <label className={css.label}>
              Password
              <Field name="password" />
            </label>
            <span>
              <ErrorMessage name="password" />
            </span>
          </div>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </Box>
  );
};
export default LoginForm;
