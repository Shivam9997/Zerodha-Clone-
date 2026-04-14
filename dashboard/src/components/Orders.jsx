import { useContext, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // orderVersion not needed

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/api/orders');
        const formattedOrders = response.data.data.map(order => ({
          _id: order._id,
          name: order.symbol,
          qty: order.qty,
          price: order.price,
          mode: order.mode,
          createdAt: order.createdAt
        })) || [];
        setOrders(formattedOrders);
      } catch (err) {
        setError('Failed to load orders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

  useEffect(() => {
    setOrders([]);
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter(o => 
      o?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [orders, searchTerm]);

  const sortedOrders = useMemo(() => {
    let sortable = [...filteredOrders];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        if (sortConfig.key === 'date') aVal = new Date(a.createdAt); bVal = new Date(b.createdAt);
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [filteredOrders, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? '↥' : '↧';
  };

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">{error}</div>;
  if (sortedOrders.length === 0) return (
    <div className="no-data">
      <p className="title">No orders yet</p>
      <Link to="/" className="btn">Get started</Link>
    </div>
  );

  return (
    <div className="orders">
      <div className="table-controls">
        <input 
          type="text" 
          placeholder="Search orders..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span>({sortedOrders.length})</span>
      </div>
      {sortedOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({sortedOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th onClick={() => requestSort('name')}>Instrument {getSortIcon('name')}</th>
                  <th onClick={() => requestSort('qty')}>Qty. {getSortIcon('qty')}</th>
                  <th onClick={() => requestSort('price')}>Price {getSortIcon('price')}</th>
                  <th>Mode</th>
                  <th>Date {getSortIcon('date')}</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.map((order, index) => (
                  <tr key={order._id || `order-${index}`}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{Number(order.price).toFixed(2)}</td>
                    <td>{order.mode}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
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
