import { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "../components/Dashboard";
import TopBar from "../components/TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await api.get(
          "/verify",
          { withCredentials: true }
        );
        
        if (response.data.status) {
          setAuthenticated(true);
          setLoading(false);
        } else {
          window.location.href = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173/login";
        }
      } catch (error) {
        console.error("Auth error:", error);
        window.location.href = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173/login";
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;