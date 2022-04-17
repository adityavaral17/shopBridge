import "./style.scss";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  const logout = () => {
    alert("Are you sure want logout");
  };
  return (
    <div className="login-wrapper">
      <h1>Sign in</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="form-wrapper">
              <label className="email-field">
                <span className="labels"> Email:</span>{" "}
                <Field type="email" name="email" placeholder="email@domain.com" className="input-field" />
                <ErrorMessage className="error" name="email" component="div" />
              </label>
              <label className="password-field">
                <span className="labels">Password:</span>
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input-field"
                  
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
              </label>
              <div className="action-btn">
                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <button
                  className="log-out-btn"
                  onClick={logout}
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
