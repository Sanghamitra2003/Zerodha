import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie"; // 👈 Ye zaroori import hai
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* 1. CookiesProvider ko sabse bahar rakho taaki pura app cookies access kar sake */}
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    {/* 2. "/*" ka matlab hai ki dashboard ke andar ki saari routing Home component sambhalega */}
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>,
);
