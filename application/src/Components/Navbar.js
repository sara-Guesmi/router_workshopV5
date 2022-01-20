import React from "react";
import { Nav, Navbar as N } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <N bg="dark" variant="dark">
        <div style={{ display: "flex" }}>
          <N.Brand>Router</N.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="appLink">
              Home
            </Link>
            <Link to="/users" className="appLink">
              Users
            </Link>
          </Nav>
        </div>
      </N>
    </div>
  );
};

export default Navbar;
