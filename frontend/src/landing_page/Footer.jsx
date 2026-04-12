import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container border-top mt-5" style={{ fontSize: "14px" }}>
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
          <p className="text-muted mt-3">
            &copy; 2024 Zerodha Broking Limited. All rights reserved.
          </p>
        </div>
        <div className="col">
          <h5 className="fw-semibold mb-3">Company</h5>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><a href="#">Referral programme</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press &amp; media</a></li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fw-semibold mb-3">Support</h5>
          <ul>
            <li><Link to="/support">Contact</Link></li>
            <li><a href="#">Support portal</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">API documentation</a></li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fw-semibold mb-3">Account</h5>
          <ul>
            <li><Link to="/signup">Open an account</Link></li>
            <li><a href="#">Fund transfer</a></li>
            <li><a href="#">60 day challenge</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
        <p>
          Zerodha is a member of NSE, BSE and MCX and is regulated by SEBI. Zerodha offers
          brokerage-free equity investments and charges flat Rs. 20 or 0.03% (whichever is
          lower) on intraday and F&amp;O trades.
        </p>
        <p>
          Investment in securities market are subject to market risks, read all the related
          documents carefully before investing. The information herein is not directed to any
          jurisdiction where the access or use of the information is illegal.
        </p>
      </div>

      <div className="row pb-4">
        <div className="col text-muted"></div>
        <div className="col">
          <ul className="d-flex flex-wrap gap-3 p-0 m-0" style={{ listStyle: "none" }}>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Cookie policy</a></li>
            <li><a href="#">Risk disclosure</a></li>
            <li><a href="#">Grievance officer</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
