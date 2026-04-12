import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const { setUsername } = useUser();

  useEffect(() => {
    api
      .get("/verify")
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      })
      .catch(() => setIsAuth(false));
  }, [setUsername]);

  if (isAuth === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        Loading...
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
