import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const [cookies] = useCookies(["token"]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyAuth = async () => {
            if (!cookies.token) {
                window.location.href = "http://localhost:3000/login";
                return;
            }

            try {
                const { data } = await axios.post(
                    "http://localhost:3002/verify",
                    {},
                    { withCredentials: true },
                );

                if (data.status) {
                    setUsername(data.user);
                } else {
                    window.location.href = "http://localhost:3000/login";
                }
            } catch (err) {
                window.location.href = "http://localhost:3000/login";
            }
        };

        verifyAuth();
    }, [cookies.token]);

    return (
        <>
            <TopBar username={username} />
            <Dashboard username={username} />
        </>
    );
};

export default Home;
