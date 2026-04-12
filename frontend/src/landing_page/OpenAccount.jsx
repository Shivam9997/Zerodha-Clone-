import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p className="text-muted mb-4">Your journey to financial success starts here.</p>
        <div>
          <Link to="/signup" className="btn btn-primary btn-lg px-5">
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
