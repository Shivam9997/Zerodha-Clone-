import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import Login from "./landing_page/login/Login.jsx";
import Signup from "./landing_page/signup/SignUp.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import DashboardRedirect from "./landing_page/login/DashboardRedirect.jsx";
import { CookiesProvider } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
