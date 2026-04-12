import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-2">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            With over 20 years of experience, we've built a reputation for
            reliability and transparency in the financial services industry.
          </p>
          <h2 className="fs-4">No hidden charges</h2>
          <p className="text-muted">
            We believe in complete transparency. What you see is what you pay —
            no surprise fees, ever.
          </p>
          <h2 className="fs-4">Secure &amp; Regulated</h2>
          <p className="text-muted">
            We are regulated by SEBI and are members of NSE, BSE, and MCX. Your
            money and data are always safe.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            Powerful tools and insights to help you make smarter financial
            decisions and grow your wealth.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} alt="Ecosystem" />
          <div className="text-center mt-3">
            <Link to="/products" className="mx-4" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
