import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage: React.FC = () => {
    const [movie, setMovie] = useState<any | null>(null); // State for movie data
    const [loading, setLoading] = useState<boolean>(true); // State for loading status
    const [error, setError] = useState<string | null>(null); // State for error message
    const { id } = useParams<{ id: string }>(); // Get the movie ID from URL parameters

    // Function to fetch movie details from the API
    const fetchMovie = async (movieId: string) => {
        setLoading(true); // Start loading
        setError(null); // Clear any previous error

        try {
            const response = await axios.get(`https://kpu8ehxa4a.execute-api.us-east-1.amazonaws.com${movieId}`);
            setMovie(response.data); // Update movie data
        } catch (err) {
            console.error("Error fetching movie:", err);
            setError("Error fetching movie details. Please try again later."); // Set error message
        } finally {
            setLoading(false); // End loading
        }
    };

    // Effect to fetch movie when the component mounts or the id changes
    useEffect(() => {
        if (id) {
            fetchMovie(id); // Fetch movie if id exists
        }
    }, [id]);

    if (loading) {
        return (
            <div className="container is-fluid">
                <section className="section">
                    <p>Loading movie details...</p>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container is-fluid">
                <section className="section">
                    <p>{error}</p>
                </section>
            </div>
        );
    }

    return (
        <div className="container is-fluid">
            {movie ? (
                <section className="section">
                    <h1 className="title">{movie.movie}</h1>
                    <img
                        src={`https://kpu8ehxa4a.execute-api.us-east-1.amazonaws.com${movie.image}`}
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
                    <p>Movie not found.</p>
                </section>
            )}
        </div>
    );
};

export default MoviePage;