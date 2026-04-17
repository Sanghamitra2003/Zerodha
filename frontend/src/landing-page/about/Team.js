import React from "react";

function Team() {
    const teamMembers = [
        {
            name: "Nikhil Kamath",
            role: "Co-founder & CFO",
            img: "/media/images/nikhilKamath.jpg",
        },
        {
            name: "Dr. Kailash Nadh",
            role: "CTO",
            img: "/media/images/kailashNadh.jpg",
        },
        {
            name: "Venu Madhav",
            role: "COO",
            img: "/media/images/venuMadhav.jpg",
        },
        {
            name: "Seema Patil",
            role: "Director",
            img: "/media/images/seemaPatil.jpg",
        },
        {
            name: "Karthik Rangappa",
            role: "Chief of Education",
            img: "/media/images/karthikRangappa.jpg",
        },
        {
            name: "Austin Prakesh",
            role: "Director Strategy",
            img: "/media/images/austinPrakash.jpg",
        },
    ];

    return (
        <div className="container mb-5">
            <div className="row text-center">
                <h1 className="fs-3">People</h1>
            </div>

            <div
                className="row p-5 text-muted"
                style={{ lineHeight: "1.8rem", fontSize: "1.15em" }}
            >
                <div
                    className="col-6 p-5 text-center"
                    style={{ lineHeight: "1.8rem" }}
                >
                    <img
                        src="/media/images/nithinKamath.jpg"
                        alt="Nithin Kamath"
                        style={{ borderRadius: "100%", width: "50%" }}
                    />
                    <h5 className="mt-4 fs-5">Nithin Kamath</h5>
                    <h6 className="mt-3 fs-6">Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to
                        overcome the hurdles he faced during his decade long
                        stint as a trader. Today, Zerodha has changed the
                        landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee (SMAC) and the Market Data Advisory Committee
                        (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="/" className="text-decoration-none">
                            Homepage
                        </a>{" "}
                        /
                        <a href="/" className="text-decoration-none">
                            {" "}
                            TradingQnA{" "}
                        </a>{" "}
                        /
                        <a href="/" className="text-decoration-none">
                            Twitter
                        </a>
                    </p>
                </div>
            </div>

            <div className="row p-5 text-muted text-center">
                {teamMembers.map((member, index) => (
                    <div className="col-4 p-4" key={index}>
                        <img
                            src={member.img}
                            alt={member.name}
                            style={{ borderRadius: "100%", width: "60%" }}
                        />
                        <h5 className="mt-4 fs-5">{member.name}</h5>
                        <h6 className="mt-3 fs-6">{member.role}</h6>
                        <p className="mt-3">
                            <span
                                className="text-muted"
                                style={{ cursor: "pointer" }}
                            >
                                Bio <i className="fa fa-angle-down"></i>
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
