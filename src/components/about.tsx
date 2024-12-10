import React from "react";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero is-large is-info is-bold">
                <div className="hero-body" style={{ textAlign: "center" }}>
                    <div className="container">
                        <h1 className="title" style={{ fontSize: "3rem", fontWeight: "bold" }}>
                            This is my About Page
                        </h1>
                        <p className="subtitle" style={{ fontSize: "1.5rem", marginTop: "10px" }}>
                            Platform where you can find all your Favourite movies
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content Section */}
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        {/* Left Content */}
                        <div className="column is-half">
                            <h2 className="title is-3">Who We Are</h2>
                            <p className="content" style={{ fontSize: "1.2rem" }}>
                                We are a team of passionate individuals dedicated to creating a platform that brings value to our users. 
                                Our mission is to provide high-quality content and services that help people achieve their goals.
                            </p>
                            <p className="content" style={{ fontSize: "1.2rem" }}>
                                With our platform, you can explore a range of exciting features designed to make your experience seamless and enjoyable.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="column is-half">
                            <figure className="image is-4by3">
                                <img
                                    src="https://maqdisyya.alquds.edu/img/about-us.png"
                                    alt="About us"
                                    style={{ borderRadius: "10px" }}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer" style={{ backgroundColor: "#f5f5f5", padding: "2rem 0" }}>
                <div className="content has-text-centered">
                    <p>
                        <strong>Our Platform</strong> is here to make your journey extraordinary.
                        <br />
                        <a href="/contact" className="button is-link is-light">
                            Contact Us
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}
