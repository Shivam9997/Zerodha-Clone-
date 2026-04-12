import React from "react";

const categories = [
  {
    icon: "fa-solid fa-user-plus",
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Account Opening Status",
      "Required Documents",
      "Account Opening Charges",
      "Account Opening Process",
      "Account Opening Timeline",
    ],
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Trading & Orders",
    links: [
      "Place / Modify Orders",
      "Order Rejection Reasons",
      "Intraday Margin Rules",
      "F&O Trading",
      "GTT Orders",
      "AMO Orders",
      "Basket Orders",
    ],
  },
  {
    icon: "fa-solid fa-wallet",
    title: "Funds & Withdrawals",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "Withdrawal Processing Time",
      "UPI & Bank Limit Issues",
      "Fund Transfer Failed",
      "Ledger & P&L Reports",
      "Tax P&L Statement",
    ],
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Demat & Holdings",
    links: [
      "View Holdings",
      "Demat Transfer (DIS)",
      "Pledge & Unpledge",
      "Corporate Actions",
      "Dividend Queries",
      "Bonus & Rights Issue",
      "Stock Delivery Issues",
    ],
  },
  {
    icon: "fa-solid fa-receipt",
    title: "Bills & Charges",
    links: [
      "Brokerage Charges",
      "STT & Regulatory Charges",
      "Annual Maintenance Charges",
      "DP Charges",
      "GST on Trades",
      "Contract Notes",
      "Dispute a Charge",
    ],
  },
  {
    icon: "fa-solid fa-headset",
    title: "Technical Issues",
    links: [
      "Kite Login Issues",
      "App Crash / Slowness",
      "Chart Not Loading",
      "OTP / 2FA Issues",
      "Password Reset",
      "Console Access",
      "API / Kite Connect",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mb-5 mt-2">
        <h3 className="fs-2 mb-4">To create a ticket, select a relevant topic</h3>
        {categories.map((cat) => (
          <div key={cat.title} className="col-4 p-5 mt-2 mb-2" style={{ fontSize: "15px" }}>
            <h5 className="mb-3">
              <i className={`${cat.icon} me-2`}></i>
              {cat.title}
            </h5>
            {cat.links.map((link) => (
              <React.Fragment key={link}>
                <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  {link}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
