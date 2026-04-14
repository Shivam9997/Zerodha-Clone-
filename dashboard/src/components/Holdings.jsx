import { useState, useEffect, useMemo } from "react";
import { holdings } from "../data/data.jsx";

const Holdings = () => {
  // orderVersion not needed

  const [holdingsData, setHoldingsData] = useState(holdings);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });



  const filteredHoldings = useMemo(() => {
    return holdingsData.filter(h => 
      h?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [holdingsData, searchTerm]);

  const sortedHoldings = useMemo(() => {
    let sortable = [...filteredHoldings];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        if (sortConfig.key === 'pnl') {
          aVal = a.price * a.qty - a.avg * a.qty;
          bVal = b.price * b.qty - b.avg * b.qty;
        }
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [filteredHoldings, sortConfig]);

  const totalInvestment = sortedHoldings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const currentValue = sortedHoldings.reduce((sum, h) => sum + h.price * h.qty, 0);
  const pnl = currentValue - totalInvestment;

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

  if (sortedHoldings.length === 0) return (
    <div className="no-data">
      <p className="title">No holdings yet</p>
      <p>Your portfolio is empty. Start trading!</p>
    </div>
  );

  return (
    <>
      <div className="table-controls">
        <input 
          type="text" 
          placeholder="Search holdings..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span>({sortedHoldings.length})</span>
      </div>
      <h3 className="title">Holdings ({sortedHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th onClick={() => requestSort('name')}>Instrument {getSortIcon('name')}</th>
              <th onClick={() => requestSort('qty')}>Qty. {getSortIcon('qty')}</th>
              <th onClick={() => requestSort('avg')}>Avg. cost {getSortIcon('avg')}</th>
              <th onClick={() => requestSort('price')}>LTP {getSortIcon('price')}</th>
              <th>Cur. val</th>
              <th onClick={() => requestSort('pnl')}>P&amp;L {getSortIcon('pnl')}</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {sortedHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const stockPnl = curValue - stock.avg * stock.qty;
              const isProfit = stockPnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day.startsWith('+') ? "profit" : "loss";
              return (
                <tr key={stock._id || `holding-${index}`}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{stockPnl.toFixed(2)}</td>
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
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>₹{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>₹{pnl.toFixed(2)}</h5>
          <p>P&amp;L</p>
        </div>
      </div>
  
    </>
  );
};

export default Holdings;
