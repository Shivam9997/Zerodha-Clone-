import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';
import { useState, useContext } from "react";

import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GeneralContext from "./GeneralContext";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem key={index} stock={stock} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (e) => {
    setShowTooltip(true);
  };

  const handleMouseLeave = (e) => {
    setShowTooltip(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showTooltip && <WatchListActions uid = {stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openOrderWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openOrderWindow(uid, "BUY");
  };

  const handleSellClick = () => {
    openOrderWindow(uid, "SELL");
  };

  return (
    <span className="actions ">
      <span>
        <span onClick={handleBuyClick}>
        <Tooltip
          title="Buy  (B)"
          placement="top"
         arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        </span>
        <span onClick={handleSellClick}>
        <Tooltip
          title="Sell  (S)"
          placement="top"
         arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        </span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
         arrow
          TransitionComponent={Grow}
        >
          <button className="action">
          <BarChartOutlined className= "icon"/>
          </button>
        </Tooltip>
        <Tooltip
          title="More "
          placement="top"
         arrow
          TransitionComponent={Grow}
        >
           <button className="action">
          <MoreHoriz className= "icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
