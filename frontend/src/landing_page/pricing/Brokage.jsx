import React from "react";

function Brokage() {
  return (
    <div className="container ">
      <div className="row p-5 mb-5 mt-5 border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="text-center mb-3 fs-5">Brokage calculator</h3>
          </a>
          <ul style={{lineHeight:"1.8"}} className="text-muted">
            <li>
              Call & Trade and RMS auto-squreoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>
             Digital contract notes will be sent via e-mail.
            </li>
            <li>
             physical copies of contract notes will be available on request at an additional cost of ₹50 + GST per contract note.
            </li>
            <li>
              For NRI account holders, the brokerage charges will be the same as mentioned 
            </li>
            <li>
              For NRI account holders (PIS), the brokerage charges will be the same as mentioned above, but an additional charge of ₹100 + GST per executed order will be applicable for currency and commodity trades.
            </li>
            <li>
             If the account holder opts for physical contract notes, an additional charge of ₹50 + GST per contract note will be applicable.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-center" >List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokage;
