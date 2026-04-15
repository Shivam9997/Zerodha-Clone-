import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "120px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={closeMenu}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={closeMenu}>Support</Link>
            </li>
          </ul>

          <div className="d-flex gap-3">
            <Link 
              to="/login"
              className="btn btn-outline-primary btn-sm px-4"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="btn btn-success btn-sm px-4"
              onClick={closeMenu}
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
