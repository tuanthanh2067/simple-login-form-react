import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  let title = "";
  if (location.pathname === "/login") {
    title = "Log in";
  } else if (location.pathname === "/signup") {
    title = "Sign up";
  }
  return (
    <Navbar>
      <Navbar.Brand>{title}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
