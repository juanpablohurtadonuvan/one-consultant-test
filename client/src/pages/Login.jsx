import React from "react";
import loginImg from "../assets/img.png";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen rounded-md">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center ">
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              try {
                fetch("http://localhost:5100/myacademic/api/v1/auth/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: values.username,
                    password: values.password,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    // const dataE = data.errors[0].msg;
                    console.log(data);
                    if (data.status === "ok") {
                      toast.success(
                        `The user ${values.username} has been logged successfullly`
                      );
                      localStorage.setItem("email", values.username);
                      setTimeout(() => {
                        navigate("/home");
                      }, 2000);
                    } else {
                      toast.error("Check username or password!!");
                      resetForm();
                    }
                  });
              } catch (error) {
                console.log(error.response.errors.msg);
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-md">
                <h2 className="text-4xl font-bold text-center py-6 hover:text-[#0b3c89]">
                  My Academic App
                </h2>
                <div className="flex flex-col py-2">
                  <label>Username</label>
                  <Field
                    className="border p-2 rounded-full"
                    name="username"
                    type="text"
                  />
                  {errors.username && touched.username ? (
                    <div className="text-red-600">{errors.username}</div>
                  ) : null}
                </div>
                <div className="flex flex-col py-2">
                  <label>Password</label>
                  <Field
                    className="border p-2 rounded-full"
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-600">{errors.password}</div>
                  ) : null}
                </div>
                <button
                  className="border w-full my-5 py-2 bg-[#0b3c89] hover:bg-[#2857a3] text-white rounded-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
