import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  SHOW_MODAL,
  HIDE_MODAL,
} from "../constants/actionTypes";

import axios from "axios";

export const signup = (email, password) => (dispatch) => {
  return axios
    .post("/api/register-user", { email, password })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch({
        type: SHOW_MODAL,
        payload: data.message,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch({
        type: SHOW_MODAL,
        payload: error.response.data.message,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  return axios
    .post("/api/login", { email, password })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.id },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SHOW_MODAL,
        payload: error.response.data.message,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
