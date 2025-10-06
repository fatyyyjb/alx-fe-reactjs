import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("User registered:", values);
    alert("User registered successfully with Formik!");
    resetForm();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFF2D8]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-8 rounded-2xl shadow-md w-80 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-center">Register (Formik)</h2>

          <Field
            name="username"
            placeholder="Username"
            className="border rounded-md p-2"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="border rounded-md p-2"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border rounded-md p-2"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
