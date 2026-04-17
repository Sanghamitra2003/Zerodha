import React from "react";

function Hero() {
    return (
        <div className="container p-5">
            <div className="text-center">
                <h1 className="mt-5 fs-3">Zerodha Products</h1>
                <h4 className="mt-4 mb-4 fs-5" style={{ fontWeight: 400 }}>
                    Sleek, modern, and intuitive trading platforms
                </h4>
                <p
                    className="text-muted fs-6 border-bottom"
                    style={{ paddingBottom: "110px" }}
                >
                    Check out our{" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                        investment offerings{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
