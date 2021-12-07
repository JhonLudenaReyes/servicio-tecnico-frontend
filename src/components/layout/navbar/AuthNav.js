import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <Nav className="mr-auto">
        <Link
          className="Link"
          to="/dashboard"
          style={{ color: "gray", textDecoration: "inherit" }}
        >
          <b>Usuario</b>
        </Link>
        <Link
          className="Link"
          to="/dashboard"
          style={{ color: "gray", textDecoration: "inherit" }}
        >
          <b>Permiso</b>
        </Link>
      </Nav>
    </>
  );
};

export default AuthNav;
