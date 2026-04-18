import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

function Navbar() {
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    const activeStyle = ({ isActive }) => ({
        color: isActive ? "#387ed1" : "#666",
        fontWeight: isActive ? "600" : "400",
    });

    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img
                        src="/media/images/logo.svg"
                        alt="Logo"
                        style={{ width: "25%" }}
                    />
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 custom-nav-link"
                                style={activeStyle}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 custom-nav-link"
                                style={activeStyle}
                                to="/product"
                            >
                                Product
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 custom-nav-link"
                                style={activeStyle}
                                to="/pricing"
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 custom-nav-link"
                                style={activeStyle}
                                to="/support"
                            >
                                Support
                            </NavLink>
                        </li>

                        {!token ? (
                            <li className="nav-item ms-2">
                                <Link
                                    className="btn btn-primary text-white px-4 py-2"
                                    to="/signup"
                                    style={{
                                        borderRadius: "4px",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Signup
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item ms-3">
                                <button
                                    className="btn text-danger fw-bold border-0 bg-transparent"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
