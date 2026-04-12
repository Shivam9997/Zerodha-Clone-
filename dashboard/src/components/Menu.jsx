import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { username } = useUser();

  const avatarInitials = username
    ? username.slice(0, 2).toUpperCase()
    : "U";

  // ✅ Logout Function (Local + Production Safe)
  const handleLogout = () => {
    removeCookie("token", { path: "/" });

    const redirectURL =
      window.location.hostname === "localhost"
        ? "http://localhost:5174/"
        : "https://your-frontend-url.onrender.com";

    window.location.href = redirectURL;
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const closeDropdown = () => setIsProfileDropdownOpen(false);
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="Logo" />

      <div className="menus">
        <ul>
          {menuItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <p className={isActive ? "menu selected" : "menu"}>
                    {item.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <hr />

        {/* Profile Section */}
        <div
          className="profile"
          onClick={(e) => {
            e.stopPropagation(); // prevent closing immediately
            setIsProfileDropdownOpen((prev) => !prev);
          }}
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