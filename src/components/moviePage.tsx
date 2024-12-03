import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
    const [movie, setMovie] = useState<any | null>(null); // State to hold the movie details
    const { id } = useParams(); // Get the movie ID from the URL

    const fetchMovie = async (id: string) => {
        try {
            const response = await axios.get(`https://dummyapi.online/api/movies/${id}`);
            setMovie(response.data); // Set the movie data from API response
        } catch (error) {
            console.error("Error fetching movie:", error);
            setMovie(null); // Set movie to null if not found
        }
    };

    useEffect(() => {
        if (id) {
            fetchMovie(id); // Fetch movie details on component mount
        }
    }, [id]);

    return (
        <div className="container is-fluid">
            {movie ? (
                <section className="section">
                    <h1 className="title">{movie.movie}</h1>
                    <img
                        src={`https://dummyapi.online/${movie.image}`}
                        alt={movie.movie}
                        onError={(e) => {
                            e.currentTarget.src = "https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"; // Fallback image
                        }}
                        style={{ maxWidth: "400px", marginBottom: "20px" }}
                    />
                    <p className="content">
                        <strong>ID:</strong> {movie.id}
                    </p>
                    <p className="content">
                        <strong>Rating:</strong> {movie.rating}
                    </p>
                    <a
                        href={movie.imdb_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-info"
                    >
                        View on IMDb
                    </a>
                </section>
            ) : (
                <section className="section">
                    <p>Movie not found or still loading...</p>
                </section>
            )}
        </div>
    );
}
