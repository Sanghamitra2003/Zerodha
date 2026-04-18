import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyAuth = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            let token = urlParams.get("token") || localStorage.getItem("token");

            if (!token) {
                window.location.href = "https://zerodha-web.vercel.app/login";
                return;
            }

            localStorage.setItem("token", token);

            try {
                const { data } = await axios.post(
                    "https://zerodha-ci10.onrender.com/verify",
                    { token },
                    { withCredentials: true },
                );

                if (data.status) {
                    setUsername(data.user);
                } else {
                    localStorage.removeItem("token");
                    window.location.href =
                        "https://zerodha-web.vercel.app/login";
                }
            } catch (err) {
                window.location.href = "https://zerodha-web.vercel.app/login";
            }
        };

        verifyAuth();
    }, []);

    return (
        <>
            <TopBar username={username} />
            <Dashboard username={username} />
        </>
    );
};

export default Home;
