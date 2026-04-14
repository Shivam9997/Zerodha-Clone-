import { useEffect, useState } from "react";
import api from "../api";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/api/positions")
      .then((res) => {
        // Handle response.data or res.data.data structure
        const data = res.data?.data || res.data || [];
        setAllPositions(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        console.error("Positions error:", err);
        setError("Failed to load positions.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="title">Loading positions…</p>;
  if (error) return <p className="title" style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const pnl = curValue - (stock.avg || 0) * (stock.qty || 0);
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = (stock.day || '').startsWith('+') ? "profit" : "loss";
              return (
                <tr key={stock._id || index}>
                  <td>{stock.product || 'EQ'}</td>
                  <td>{stock.name || stock.symbol || 'N/A'}</td>
                  <td>{stock.qty || 0}</td>
                  <td>{(stock.avg || 0).toFixed(2)}</td>
                  <td>{(stock.price || 0).toFixed(2)}</td>
                  <td className={profClass}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day || '0%'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
