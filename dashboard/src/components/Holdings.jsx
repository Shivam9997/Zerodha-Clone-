import { useState, useEffect, useContext } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const { orderVersion } = useContext(GeneralContext);
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
        setError(null);
      })
      .catch(() => setError("Failed to load holdings."))
      .finally(() => setLoading(false));
  }, [orderVersion]);

  const totalInvestment = allHoldings.reduce(
    (sum, h) => sum + h.avg * h.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (sum, h) => sum + h.price * h.qty,
    0
  );
  const pnl = currentValue - totalInvestment;

  if (loading) return <p className="title">Loading holdings…</p>;
  if (error) return <p className="title" style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{pnl.toFixed(2)}</h5>
          <p>P&amp;L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
