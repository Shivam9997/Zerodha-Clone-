import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUser } from "../context/UserContext";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Orders", path: "/orders" },
  { label: "Holdings", path: "/holdings" },
  { label: "Positions", path: "/positions" },
  { label: "Funds", path: "/funds" },
  { label: "Apps", path: "/apps" },
];

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useUser();

  const avatarInitials = username
    ? username.slice(0, 2).toUpperCase()
    : "U";

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    navigate("/login");
  };

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <p
                  className={
                    location.pathname === item.path
                      ? "menu selected"
                      : "menu"
                  }
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div
          className="profile"
          onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
        >
          <div className="avatar">{avatarInitials}</div>
          <p className="username">{username || "User"}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
