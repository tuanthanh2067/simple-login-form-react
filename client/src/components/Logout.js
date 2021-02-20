import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    localStorage.removeItem("user");
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default Logout;
