import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../constants/actionTypes";

import axios from "axios";

export const signup = (email, password) => (dispatch) => {
  return axios
    .post("/api/register-user", { email, password })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  return axios
    .post("/api/login", { email, password })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
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
        type: SET_MESSAGE,
        payload: error.response.data.message,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
