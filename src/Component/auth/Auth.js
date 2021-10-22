import React from "react";
import { useDispatch } from "react-redux";
// import { signUpError } from "../../redux/Auth/auth-actions";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/Auth/auth-operations";
// import { errorSelector, loaderSelector } from "../../redux/Auth/auth-selectors";
import AuthForm from "./authForm/AuthFormgit ";

const Auth = () => {
  const dispatch = useDispatch();
  // const error = useSelector(errorSelector);
  // const loader = useSelector(loaderSelector);
  // const resetError = () => error && dispatch(signUpError(""));
  const signUp = (user) => dispatch(signUpOperation(user));
  const signIn = (user) => dispatch(signInOperation(user));
  return (
    <>
      <AuthForm signUp={signUp} signIn={signIn} />
      {/* {error && <h2>{error}</h2>}
      {loader && <h2>...loading</h2>} */}
    </>
  );
};

export default Auth;
