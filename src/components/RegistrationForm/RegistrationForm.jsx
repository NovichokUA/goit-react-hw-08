import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

import * as Yup from "yup";
import { Box, Button, TextField, Stack } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Please enter your name. Minimum length of three characters.")
    .max(50, "Too long!")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters.")
    .matches(/[a-zA-Z]/, "The password must contain Latin letters.")
    .matches(/[0-9]/, "The password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "The password must contain at least one special character."
    )
    .required("Password is required."),
});

const RegistrationForm = () => {
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
          <div className={css.fieldContainer}>
            <label className={css.label}>
              <Field
                as={TextField}
                label="Name"
                type="text"
                name="name"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText="Please enter your name."
              />
            </label>
            <span className={css.message}>
              <ErrorMessage name="name" />
            </span>
          </div>

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
                helperText="Please enter your password."
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
              startIcon={<HowToRegIcon />}
              size="small"
            >
              Registration
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};
export default RegistrationForm;
