import axios from "axios";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./auth-actions";
import { SingUP_URL, SignIN_URL } from "../../service/Api";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(SingUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error.response.data.error.message));
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const response = await axios.post(SignIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error.response.data.error.message));
  }
};

export { signUpOperation, signInOperation };
