import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";

import HomePage from "./landing-page/home/HomePage";
import Signup from "./landing-page/signup/Signup";
import Login from "./landing-page/login/Login";
import AboutPage from "./landing-page/about/AboutPage";
import PricingPage from "./landing-page/pricing/PricingPage";
import ProductsPage from "./landing-page/products/ProductsPage";
import SupportPage from "./landing-page/support/SupportPage";
import PageNotFound from "./landing-page/PageNotFound";

import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            pauseOnFocusLoss={false}
            theme="colored"
        />

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/product" element={<ProductsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </CookiesProvider>,
);
