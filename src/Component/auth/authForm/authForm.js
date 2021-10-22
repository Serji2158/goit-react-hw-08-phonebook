import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthFormContainer } from "./AuthFormStyled";

const AuthForm = ({ signUp, signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "displayName" && setDisplayName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/register"
      ? signUp({ email, password, displayName })
      : signIn({ email, password });
  };

  return (
    <AuthFormContainer>
      <form onSubmit={onHandleSubmit} className="authForm">
        {location.pathname === "/register" && (
          <label className="inputName">
            Name
            <input
              type="text"
              value={displayName}
              onChange={onHandleChange}
              name="displayName"
              className="input"
            />
          </label>
        )}
        <label className="inputName">
          Email
          <input
            type="text"
            value={email}
            onChange={onHandleChange}
            name="email"
            className="input"
          />
        </label>
        <label className="inputName">
          Password
          <input
            type="text"
            value={password}
            onChange={onHandleChange}
            name="password"
            className="input"
          />
        </label>
        <button type="submit" className="btn">
          {location.pathname === "/register" ? "Sign up" : "Sign in"}
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
