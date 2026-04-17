import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyAuth = async () => {
            // Cookie ki jagah localStorage use kar rahe hain
            const token = localStorage.getItem("token");

            if (!token) {
                window.location.href = "https://zerodha-web.vercel.app/login";
                return;
            }

            try {
                const { data } = await axios.post(
                    "https://zerodha-ci10.onrender.com/verify",
                    { token }, // Token body mein bhej rahe hain verification ke liye
                    { withCredentials: true },
                );

                if (data.status) {
                    setUsername(data.user);
                } else {
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
