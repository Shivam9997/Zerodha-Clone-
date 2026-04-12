import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import SignUp from './landing_page/signup/SignUp.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </StrictMode>,
)
