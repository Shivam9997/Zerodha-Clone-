import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { orderVersion } = useContext(GeneralContext);

  useEffect(() => {
    setLoading(true);
    api
      .get("/allOrders")
      .then((res) => {
        setOrders(res.data);
        setError(null);
      })
      .catch(() => setError("Failed to load orders."))
      .finally(() => setLoading(false));
  }, [orderVersion]);

  if (loading) return <p className="title">Loading orders…</p>;
  if (error) return <p className="title" style={{ color: "red" }}>{error}</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id || index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{Number(order.price).toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
