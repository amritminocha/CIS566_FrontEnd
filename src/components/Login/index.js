import LoginForm from "../../common/LoginForm";
import React, { useState } from "react";
import authData from '../../utilities/auth-data.json';
import { useNavigate } from "react-router-dom";
import axios from '../../utilities/axios';

const Login = () => {

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validateInput = (email, password) => {
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
    if (password.length === 0) {
      error.password = "Password canot be empty";
      formIsValid = false;
    }
    setErrors(error);
    return formIsValid;
  };

  const onSubmit = (email, password) => {
    if (validateInput(email, password)) {
      axios.post('/login', {
        email: email,
        password: password
      }).then(({data}) => {
        // localStorage.setItem('isLoggedIn', 'admin');
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('isLoggedIn', data.data.type);
        if (data.data.type === 'admin') {
          alert(`${data.data.name} successfully logged in`);
          window.location = '/addroom';
        } else {
          window.location = '/';
        }
      }).catch(err => {
        console.log(err);
        alert('Wrong username or password');
      });

      // const ind = authData.data.findIndex(val => val.email === email && val.password === password);
      // if (ind !== -1) {
      //   localStorage.setItem('isLoggedIn', authData.data[ind].type);
      //   alert(`${authData.data[ind].name} successfully logged in`);
      //   if (authData.data[ind].type === 'admin') {
      //     window.location = '/addroom';
      //   } else {
      //     window.location = '/';
      //   }
      // } else {
      //   alert('Wrong username or password');
      // }
    }
  };

  return (
    <LoginForm title="Login" onSubmit={onSubmit} errors={errors} />
  )
};

export default Login;