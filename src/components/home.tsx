import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";

export default function Home() {
    return (
        <>
            {/* Hero Section with Banner */}
            <section className="hero is-large is-dark is-bold">
                <div className="hero-body" style={{ textAlign: "center" }}>
                    <div className="container">
                        <h1 className="title" style={{ fontSize: "3rem", fontWeight: "bold" }}>
                            Welcome to MovieMania
                        </h1>
                        <p className="subtitle" style={{ fontSize: "1.5rem", marginTop: "10px" }}>
                            Your ultimate destination for movies and entertainment!
                        </p>
                        {/* Featured Image */}
                        <div style={{ marginTop: "20px" }}>
                            <img
                                src="https://via.placeholder.com/800x450"
                                alt="Featured Movies"
                                style={{
                                    border: "2px solid white",
                                    borderRadius: "10px",
                                    maxWidth: "100%",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                                }}
                            />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <a href="/signup" className="button is-large is-warning">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Movies Section */}
            <section className="section">
                <div className="container">
                    <h2 className="title is-3" style={{ textAlign: "center", marginBottom: "30px" }}>
                        Explore Popular Movies
                    </h2>
                    <div className="columns is-multiline">
                        {/* Static Movie Cards */}
                        {[
                            { id: 1, title: "The Shawshank Redemption", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
                            { id: 2, title: "The Godfather", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
                            { id: 3, title: "The Dark Knight", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
                            { id: 4, title: "Pulp Fiction", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
                        ].map((movie) => (
                            <div className="column is-one-quarter" key={movie.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img
                                                src={movie.image}
                                                alt={movie.title}
                                                style={{
                                                    borderRadius: "10px",
                                                    height: "300px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </figure>
                                    </div>
                                    <div className="card-content" style={{ textAlign: "center" }}>
                                        <h3 className="title is-5">{movie.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




<Authenticator loginMechanisms={['email']} signUpAttributes={['name']}>
    </Authenticator>
        </>
    );
}
