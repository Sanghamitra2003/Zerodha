import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Universe() {
    const navigate = useNavigate();
    const [cookies] = useCookies(["token"]);

    return (
        <div className="container mt-5 p-5">
            <div className="row text-center mb-5">
                <h4 className="my-4">The Zerodha Universe</h4>
                <p>
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/smallcaseLogo.png"
                        style={{ width: "50%" }}
                        alt="smallcase"
                    />
                    <p className="text-small text-muted mt-4">
                        Thematic investment platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/streakLogo.png"
                        style={{ width: "40%" }}
                        alt="streak"
                    />
                    <p className="text-small text-muted mt-4">
                        Algo & strategy platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/sensibullLogo.svg"
                        style={{ width: "40%" }}
                        alt="sensibull"
                    />
                    <p className="text-small text-muted mt-4">
                        Options trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/zerodhaFundhouse.png"
                        style={{ width: "50%" }}
                        alt="fundhouse"
                    />
                    <p className="text-small text-muted mt-4">
                        Asset management
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/goldenpiLogo.png"
                        style={{ width: "40%" }}
                        alt="goldenpi"
                    />
                    <p className="text-small text-muted mt-4">
                        Bonds trading platform
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img
                        src="/media/images/dittoLogo.png"
                        style={{ width: "30%" }}
                        alt="ditto"
                    />
                    <p className="text-small text-muted mt-4">Insurance</p>
                </div>

                <div className="col-12 mt-5">
                    {cookies.token ? (
                        <a
                            href="http://localhost:3001"
                            className="btn btn-primary px-5 py-2 fs-5"
                            style={{
                                borderRadius: "4px",
                                width: "fit-content",
                            }}
                        >
                            Go to Dashboard
                        </a>
                    ) : (
                        <button
                            onClick={() => navigate("/signup")}
                            className="btn btn-primary px-5 py-2 fs-5"
                            style={{
                                borderRadius: "4px",
                                width: "fit-content",
                            }}
                        >
                            Sign up for free
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Universe;
