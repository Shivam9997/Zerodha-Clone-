import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center  p-4 mb-5 border-bottom">
        <h1 className="mt-5">Pricing</h1>
        <p className="text-muted mt-3">
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </p>
      </div>
      <div className="row p-4 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt=" pricing equity" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery trades are free. For intraday and F&O trades, we
            charge a flat fee of ₹20 per executed order.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/images/intradayTrades.svg"
            alt=" pricing intraday trades"
          />
          <h1 className="fs-4">Intraday and F&amp;O trades</h1>
          <p className="text-muted">
            For intraday trades, we charge a flat fee of ₹20 per executed order.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt=" pricing equity" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are free. We do not charge any
            fees for investing in direct mutual funds through our platform.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
