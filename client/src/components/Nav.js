import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const location = useLocation();

  const user = useSelector((state) => state.auth);

  let title = "";
  if (location.pathname === "/login") {
    title = "Log in";
  } else if (location.pathname === "/signup") {
    title = "Sign up";
  } else if (location.pathname === "/home") {
    title = "Home";
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>{title}</Navbar.Brand>
      {user.isLoggedIn && (
        <>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default Nav;
