import { auth } from "../../utils/firebase";
import styles from "./Register.module.css";
import InputError from "../Shared/InputError";
import React, { useState, useEffect } from "react";

const Register = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email);
    console.log(password);

    if (e.target.password.value !== e.target.rePassword.value) {
      setErrorMessage("Repeat password does not match password!");
    } else {
      setErrorMessage("");
    }

    auth.createUserWithEmailAndPassword(email, password).then((res) => {
      console.log("Register");
      history.push("/");
    });
  };

  //   const [errorMessage, setErrorMessage] = useState("");

  //   const onDescriptionChange = (e) => {
  //     console.log(e.target.password.value);
  //     // if (e.target.password.value !== e.target.rePassword.value) {
  //     //   setErrorMessage("Description under 10 symbols!");
  //     // } else {
  //     //   setErrorMessage("");
  //     // }
  //   };

  return (
    <div className={styles.login}>
      <div className={styles.upper_triangle}></div>
      <h2 className={styles.login_header}>Register</h2>
      <form
        onSubmit={onRegisterSubmitHandler}
        className={styles.login_container}
      >
        <p>
          <input type="email" name="email" placeholder="Email" />
        </p>
        <p>
          <input type="password" name="password" placeholder="Password" />
        </p>
        <p>
          <input
            type="password"
            name="rePassword"
            placeholder="Repeat Password"
          />
        </p>
        <InputError>{errorMessage}</InputError>

        <p>
          <input type="submit" value="Register" />
        </p>
      </form>
    </div>
  );
};

export default Register;
