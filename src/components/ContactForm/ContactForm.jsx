import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, ErrorMessage, Field, Form } from "formik";

import css from "./ContactForm.module.css";

import { Box, TextField, Button, Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import toast from "react-hot-toast";

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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
        width: "100%",
      }}
      autoComplete="off"
    >
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={ContactShema}
        onSubmit={(values, actions) => {
          dispatch(addContact({ ...values }))
            .unwrap()
            .then(() => {
              toast.success("The operation is successful. I congratulate you.");
            });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label className={css.label}>
              <Field
                as={TextField}
                label="Name"
                type="name"
                name="name"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText="Please enter new name."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </label>

            <span className={css.message}>
              <ErrorMessage name="name" />
            </span>
          </div>
          <div className={css.container}>
            <label className={css.label}>
              <Field
                as={TextField}
                label="Number"
                name="number"
                fullWidth
                variant="outlined"
                margin="dense"
                helperText="Please enter new number."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </label>

            <span className={css.message}>
              <ErrorMessage name="number" />
            </span>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              startIcon={<PersonAddIcon />}
              size="small"
            >
              Add Contact
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};
