import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

function HomePage() {
    const [cookies, removeCookie] = useCookies(["token"]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) return;

            try {
                const { data } = await axios.post(
                    "http://localhost:3002/verify",
                    {},
                    { withCredentials: true },
                );

                if (data.status) {
                    setUsername(data.user);
                    // Toast bar-bar na aaye isliye console log bhi rakh sakte ho
                    console.log(`Welcome back, ${data.user}`);
                } else {
                    removeCookie("token");
                }
            } catch (err) {
                console.error("Home verification failed:", err);
                removeCookie("token");
            }
        };
        verifyCookie();
    }, [cookies.token, removeCookie]);

    return (
        <>
            <Hero isLoggedIn={!!username} />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            {!username && <OpenAccount />}
        </>
    );
}

export default HomePage;
