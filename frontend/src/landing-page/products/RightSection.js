import React from "react";

function RightSection({ imageURL, productName, productDescription, url }) {
    return (
        <div className="container mt-5">
            <div
                className="row text-muted align-items-center"
                style={{ lineHeight: "1.8rem", fontSize: "1.15em" }}
            >
                <div className="col-1"></div>

                <div className="col-5 mt-5">
                    <h1 className="fs-3">{productName}</h1>
                    <p className="mt-4">{productDescription}</p>

                    <a href={url} style={{ textDecoration: "none" }}>
                        {url}{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>

                <div className="col-6">
                    <img src={imageURL} alt="product"></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
