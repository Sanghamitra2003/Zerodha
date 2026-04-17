import React from "react";
import { useNavigate } from "react-router-dom";

function Hero({ isLoggedIn }) {
    const navigate = useNavigate();

    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img
                    src="/media/images/homeHero.png"
                    alt="Hero Image"
                    className="mb-5"
                />
                <h1 className="mt-5 fs-2">Invest in everything</h1>
                <p className="mt-2 mb-5 fs-5 text-muted">
                    Online platform to invest in stocks, derivatives, mutual
                    funds, ETFs, bonds, and more.
                </p>

                {isLoggedIn ? (
                    <a
                        href="http://localhost:3001"
                        className="btn btn-primary p-2 fs-5 mb-5"
                        style={{ width: "20%", margin: "0 auto" }}
                    >
                        Go to Dashboard
                    </a>
                ) : (
                    <button
                        onClick={() => navigate("/signup")}
                        className="btn btn-primary p-2 fs-5 mb-5"
                        style={{ width: "20%", margin: "0 auto" }}
                    >
                        Sign up for free
                    </button>
                )}
            </div>
        </div>
    );
}

export default Hero;
