import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import * as Yup from "yup";

import css from "./LoginForm.module.css";

import { IoLogIn } from "react-icons/io5";

import { Box } from "@mui/material";
import { Button, TextField, Stack } from "@mui/material";
import toast from "react-hot-toast";

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
          dispatch(logIn(value))
            .unwrap()
            .catch(() => {
              toast.error("Check that the data entered is correct.");
            });
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
            <span className={css.message}>
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className={css.fieldContainer}>
            <label className={css.label}>
              <Field
                as={TextField}
                label="Password"
                type="password"
                name="password"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText="Please enter your Password."
              />
            </label>
            <span className={css.message}>
              <ErrorMessage name="password" />
            </span>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              startIcon={<IoLogIn />}
              size="small"
            >
              Log In
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};
export default LoginForm;
