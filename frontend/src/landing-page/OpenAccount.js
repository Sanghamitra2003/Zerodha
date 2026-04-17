import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function OpenAccount() {
    const navigate = useNavigate();
    const [cookies] = useCookies(["token"]);

    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
                <p className="mt-3 mb-5">
                    Modern platforms and apps, ₹0 investments, and flat ₹20
                    intraday and F&O trades.
                </p>
                {cookies.token ? (
                    <a
                        href="http://localhost:3001"
                        style={{ width: "20%", margin: "0 auto" }}
                        className="btn btn-primary p-2 fs-5 mb-5"
                    >
                        Go to Dashboard
                    </a>
                ) : (
                    <button
                        onClick={() => navigate("/signup")}
                        style={{ width: "20%", margin: "0 auto" }}
                        className="btn btn-primary p-2 fs-5 mb-5"
                    >
                        Sign up for free
                    </button>
                )}
            </div>
        </div>
    );
}

export default OpenAccount;
