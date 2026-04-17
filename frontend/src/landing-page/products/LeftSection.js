import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div
                className="row text-muted"
                style={{ lineHeight: "1.8rem", fontSize: "1.15em" }}
            >
                <div className="col-6 p-5">
                    <img src={imageURL} alt="product"></img>
                </div>
                <div className="col-5 p-5 mt-5">
                    <h1 className="fs-3">{productName}</h1>
                    <p className="mt-4">{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>
                            Try Demo{" "}
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                        <a
                            href={learnMore}
                            style={{
                                marginLeft: "70px",
                                textDecoration: "none",
                            }}
                        >
                            Learn More{" "}
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play Badge"
                            ></img>
                        </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}>
                            <img
                                src="media/images/appStoreBadge.svg"
                                alt="App Store Badge"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
