import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(['token']);

  // Guest mode


  // Active menu based on route
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    removeCookie('token');
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173/";
    window.location.href = frontendUrl;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "25px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className={isActive("/") ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <p className={isActive("/orders") ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }}>
              <p className={isActive("/holdings") ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{ textDecoration: "none" }}>
              <p className={isActive("/positions") ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}>
              <p className={isActive("/funds") ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="menu-buttons">
          <button 
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
