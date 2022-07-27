import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: (values) => {
      let errors = {};
      if (!values.username) errors.username = "Field required";
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input
          id="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username} </div>
        ) : null}
        <div>password</div>
        <input
          id="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password} </div>
        ) : null}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;
