import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

/*************************************************************************************************** */
/************************** Initial values and validation *******************************************************/
/*************************************************************************************************** */
//#region
let initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

let validationParams = {
  name: Yup.string().trim().required("Required"),
  email: Yup.string().email().trim().required("Required"),
  subject: Yup.string().trim().required("Required"),
  message: Yup.string().trim().required("Required"),
};
let formValidation = Yup.object().shape(validationParams);

//#endregion

export const ContactForm = () => {
  const { t } = useTranslation();
  /*************************************************************************************************** */
  /**************************usestates and useselectors ******** ***************************************/
  /*************************************************************************************************** */
  //#region
  const [formValues, setFormValues] = useState({ ...initialValues });

  //#endregion

  /*************************************************************************************************** */
  /************************** Handlers *******************************************************/
  /*************************************************************************************************** */
  //#region

  console.log(process.env.REACT_APP_EMAILJS_PUBLICK_KEY);

  const handleSubmit = async (values: typeof initialValues) => {
    console.log({ ...values });
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_EMAIL_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        values,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormValues(initialValues);
    Swal.fire(t("contact.form.success"));
  };

  //#endregion
  /*************************************************************************************************** */
  /**************************use effects  **************************************************************/
  /*************************************************************************************************** */
  //#region
  // find fcmPartner and set it active (searching from id)

  //#endregion
  /*************************************************************************************************** */
  /************************** RENDER *******************************************************/
  /*************************************************************************************************** */

  return (
    <Formik
      initialValues={{ ...formValues }}
      validationSchema={formValidation}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      enableReinitialize
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting, isValid, resetForm, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    label={t("contact.form.name")}
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label={t("contact.form.email")}
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="subject"
                    label={t("contact.form.subject")}
                    value={values.subject}
                    onChange={handleChange}
                    fullWidth
                    error={touched.subject && Boolean(errors.subject)}
                    helperText={touched.subject && errors.subject}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label={t("contact.form.message")}
                    value={values.message}
                    onChange={handleChange}
                    fullWidth
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    multiline
                    rows={10}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* BUTTONS */}

            <Grid item xs={12} mb={2}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button color={"primary"} variant="outlined" type="submit">
                  {t("contact.form.send")}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
