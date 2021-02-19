import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const location = useLocation();

  const user = useSelector((state) => state.auth);

  let title = "";
  if (location.pathname === "/login") {
    title = "Log in";
  } else if (location.pathname === "/signup") {
    title = "Sign up";
  } else if (location.pathname === "/home") {
    title = "Home";
  } else if (location.pathname === "/lobby") {
    title = "Lobby";
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>{title}</Navbar.Brand>
      {user.isLoggedIn && (
        <>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <LinkContainer to="/home">
                <Nav.Link>Homepage</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/lobby">
                <Nav.Link>Lobby</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Log out</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default Header;
