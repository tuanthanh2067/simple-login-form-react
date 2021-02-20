import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  SHOW_MODAL,
  SHOW_LOADING,
  HIDE_LOADING,
} from "../constants/actionTypes";

import { history } from "../utils/history";

import axios from "axios";

export const signup = (email, password, fname, lname) => (dispatch) => {
  dispatch({
    type: SHOW_LOADING,
  });
  return axios
    .post("/api/register-user", { email, password, fname, lname })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch({
        type: SHOW_MODAL,
        payload: data.message,
      });
      dispatch({
        type: HIDE_LOADING,
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
      dispatch({
        type: HIDE_LOADING,
      });
    });
};

export const login = (email, password, from) => (dispatch) => {
  dispatch({
    type: SHOW_LOADING,
  });
  return axios
    .post("/api/login", { email, password })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.id },
      });
      dispatch({
        type: HIDE_LOADING,
      });
      localStorage.setItem("user", data.id);
      history.push(from);
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SHOW_MODAL,
        payload: error.response.data.message,
      });
      dispatch({
        type: HIDE_LOADING,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
