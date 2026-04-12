import { useState, useEffect } from "react";
import api from "../api";
import { useUser } from "../context/UserContext";

const formatK = (val) => {
  const abs = Math.abs(val);
  if (abs >= 1000) return (val / 1000).toFixed(2) + "k";
  return val.toFixed(2);
};

const Summary = () => {
  const { username } = useUser();
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/allHoldings")
      .then((res) => setHoldings(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const totalInvestment = holdings.reduce(
    (sum, h) => sum + h.avg * h.qty,
    0
  );
  const currentValue = holdings.reduce(
    (sum, h) => sum + h.price * h.qty,
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
        <h6>Hi, {username || "User"}!</h6>
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
          <p>Holdings ({loading ? "…" : holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              {loading ? "…" : formatK(pnl)}{" "}
              <small>
                {!loading && (pnl >= 0 ? "+" : "")}
                {loading ? "" : pnlPct + "%"}
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
