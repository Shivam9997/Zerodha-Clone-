import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="text-muted fs-5 mb-4">
          Online trading platform. Stocks, F&amp;O, Mutual Funds, and more — all in one place.
        </p>
        <div>
          <Link to="/signup" className="btn btn-primary btn-lg px-5">
            Signup for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
