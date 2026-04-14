import { useState, useEffect } from "react";
import { holdings } from "../data/data.jsx";

const formatK = (val) => {
  if (val === undefined || val === null) return "0.00";
  const abs = Math.abs(val);
  if (abs >= 1000) return (val / 1000).toFixed(2) + "k";
  return val.toFixed(2);
};

const Summary = () => {
  // ✅ FIX: useUser se nikalte waqt null check lagaya
  const username = "Guest"; 

  const [holdingsData, setHoldingsData] = useState(holdings);
  const [loading] = useState(false);

  // Calculation logic
  const totalInvestment = holdingsData.reduce(
    (sum, h) => sum + (h.avg || 0) * (h.qty || 0),
    0
  );
  const currentValue = holdingsData.reduce(
    (sum, h) => sum + (h.price || 0) * (h.qty || 0),
    0
  );
  const pnl = currentValue - totalInvestment;
  const pnlPct =
    totalInvestment > 0
      ? ((pnl / totalInvestment) * 100).toFixed(2)
      : "0.00";
  
  const pnlClass = pnl >= 0 ? "profit" : "loss";

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({loading ? "…" : holdingsData.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              {loading ? "…" : formatK(pnl)}{" "}
              <small>
                {!loading && (pnl >= 0 ? "+" : "") + pnlPct + "%"}
              </small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Current Value{" "}
              <span>{loading ? "…" : formatK(currentValue)}</span>
            </p>
            <p>
              Investment{" "}
              <span>{loading ? "…" : formatK(totalInvestment)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;