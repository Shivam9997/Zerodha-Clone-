import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <Link 
              to="/login"
              className="btn btn-outline-primary btn-sm px-4"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="btn btn-success btn-sm px-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

  /* Add mobile menu styles if needed */

