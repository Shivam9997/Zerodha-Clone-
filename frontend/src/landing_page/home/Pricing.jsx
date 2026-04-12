import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            Enjoy competitive rates and transparent pricing with no hidden fees —
            flat fees and no hidden charges.
          </p>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-3 border rounded">
              <h1 className="mb-3 text-primary">₹0</h1>
              <p className="text-muted">
                Free equity delivery &amp; direct mutual funds.
              </p>
            </div>
            <div className="col p-3 border rounded ms-2">
              <h1 className="mb-3 text-dark">₹20</h1>
              <p className="text-muted">
                Flat fee per executed order for intraday &amp; F&amp;O trades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
