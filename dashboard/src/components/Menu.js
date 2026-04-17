import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ username }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const initials = username ? username.slice(0, 2).toUpperCase() : "ZU";

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <a href="https://zerodha-web.vercel.app">
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{ width: "50px", cursor: "pointer" }}
                />
            </a>
            <div className="menus">
                <ul>
                    <li>
                        <a
                            href="https://zerodha-web.vercel.app"
                            style={{ textDecoration: "none" }}
                        >
                            <p
                                className={menuClass}
                                style={{ color: "#d35400", fontWeight: "700" }}
                            >
                                Exit Dashboard
                            </p>
                        </a>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/"
                            onClick={() => handleMenuClick(0)}
                        >
                            <p
                                className={
                                    selectedMenu === 0
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/orders"
                            onClick={() => handleMenuClick(1)}
                        >
                            <p
                                className={
                                    selectedMenu === 1
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/holdings"
                            onClick={() => handleMenuClick(2)}
                        >
                            <p
                                className={
                                    selectedMenu === 2
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/positions"
                            onClick={() => handleMenuClick(3)}
                        >
                            <p
                                className={
                                    selectedMenu === 3
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/funds"
                            onClick={() => handleMenuClick(4)}
                        >
                            <p
                                className={
                                    selectedMenu === 4
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Funds
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/apps"
                            onClick={() => handleMenuClick(5)}
                        >
                            <p
                                className={
                                    selectedMenu === 5
                                        ? activeMenuClass
                                        : menuClass
                                }
                            >
                                Apps
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">{initials}</div>
                    <p className="username">{username || "USERID"}</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
