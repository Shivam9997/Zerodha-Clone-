import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verifyAuth = async () => {
      setLoading(true);
      try {
        console.log("🔐 Checking authentication...");
        const response = await axios.get(
          "http://localhost:3000/verify",
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          }
        );

        if (response.data.status) {
          console.log("✅ User authenticated");
          setAuthenticated(true);
        } else {
          console.log("❌ User not authenticated, redirecting to login");
          // Redirect to login with return URL
          const currentUrl = window.location.href;
          const loginUrl = `http://localhost:5173/login?redirect=${encodeURIComponent(currentUrl)}`;
          window.location.href = loginUrl;
        }
      } catch (error) {
        console.error("❌ Auth verification failed:", error);
        // Redirect to login on any error
        const currentUrl = window.location.href;
        const loginUrl = `http://localhost:5173/login?redirect=${encodeURIComponent(currentUrl)}`;
        window.location.href = loginUrl;
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [location.pathname]); // Re-check on route change

  return authenticated ? children : null;
};

export default ProtectedRoute;