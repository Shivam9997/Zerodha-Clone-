import React from "react";

const DashboardRedirect = () => {
  const dashboardUrl = window.location.hostname === "localhost"
    ? "http://localhost:5174/"
    : "https://zerodha-clone-dashboard-cg4b.onrender.com/";
  window.location.href = dashboardUrl;
  return <div>Redirecting to Dashboard...</div>;
};

export default DashboardRedirect;
