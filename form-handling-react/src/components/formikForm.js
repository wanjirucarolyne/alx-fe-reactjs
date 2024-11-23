import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required."),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted successfully:", values);
    setSubmitting(false); // Reset the submitting state
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field id="username" type="text" name="username" />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field id="password" type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;