import React from "react";

const DashboardRedirect = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174/";
  window.location.href = dashboardUrl;
  return <div>Redirecting to Dashboard...</div>;
};

export default DashboardRedirect;
