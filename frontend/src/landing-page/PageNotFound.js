import React from "react";

function PageNotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-2">404! Page Not Found</h1>
                <p className="mt-3 mb-5">
                    Sorry, the page you are looking for does not exist. Please
                    check the URL and try again.
                </p>
            </div>
        </div>
    );
}

export default PageNotFound;
