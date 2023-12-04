import LoginForm from "../../common/LoginForm";
import React, { useState } from "react";
// import authData from '../../utilities/auth-data.json';
import { useNavigate } from "react-router-dom";
import axios from "../../utilities/axios";

const Signup = () => {
  // const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validateInput = (email, password, name) => {
    let error = {};
    let formIsValid = true;

    if (email.length === 0) {
      formIsValid = false;
      error.email = "Email cannot be empty";
    } else {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        error.email = "Email is not Valid";
      }
    }
    if (password.length < 5) {
      error.password = "Password must be of atleast 5 chars";
      formIsValid = false;
    }
    if (name.length < 4) {
      error.name = "Name must be of atleast 4 chars";
      formIsValid = false;
    }
    setErrors(error);
    return formIsValid;
  };

  const onSubmit = (email, password, name) => {
    if (validateInput(email, password, name)) {
      axios
        .post("/signup", {
          email: email,
          password: password,
          name: name,
          type: "user",
        })
        .then((res) => {
          localStorage.setItem("isLoggedIn", "user");
          localStorage.setItem("email", email);
          alert(`${name} successfully signed in`);
          window.location = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("Not able to signup");
        });
    }
  };

  return (
    <LoginForm
      title="Sign Up"
      onSubmit={onSubmit}
      errors={errors}
      type="signup"
    />
  );
};

export default Signup;
