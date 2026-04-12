import React from "react";
import { Link } from "react-router-dom";

const DASHBOARD_URL = "http://localhost:5173";

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
          {/* Left nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
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

          {/* Right CTA buttons */}
          <div className="d-flex align-items-center gap-3">
            <a
              href={`${DASHBOARD_URL}/login`}
              className="btn btn-outline-secondary btn-sm px-4"
            >
              Login
            </a>
            <Link to="/signup" className="btn btn-primary btn-sm px-4">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
