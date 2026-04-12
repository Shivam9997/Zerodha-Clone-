import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Learn from industry experts and gain the knowledge you need to
            succeed in the stock market.
          </p>
          <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-4">
            Ask questions, get answers, and share your trading insights with a
            community of thousands.
          </p>
          <a href="https://tradingqna.com/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            TradingQ&amp;A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
