import React, { useEffect, useState } from "react";
import MovieService from "../service/movieService";
import { Movie } from "../types/movie"; // Importing Movie type
import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [newMovie, setNewMovie] = useState<Movie>({
        id: 0,
        movie: "",
        rating: 0,
        image: "",
        imdb_url: "",
    });

    const fetchMovies = () => {
        MovieService.getAll()
            .then((response) => {
                setMovies(response.data); // Use Movie type
            })
            .catch((error) => {
                console.error("Error fetching movies:", error.message);
            });
    };

    const handleDelete = (id: number) => {
        MovieService.remove(id.toString()) // Convert ID to string for API call
            .then(() => {
                fetchMovies();
                alert("Movie deleted successfully.");
            })
            .catch((error) => {
                console.error("Error deleting movie:", error.message);
                alert("Failed to delete movie.");
            });
    };

    const handleAddMovie = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        MovieService.put(newMovie)
            .then(() => {
                fetchMovies();
                alert("Movie added successfully.");
                setNewMovie({
                    id: 0,
                    movie: "",
                    rating: 0,
                    image: "",
                    imdb_url: "",
                }); // Reset the form
            })
            .catch((error) => {
                console.error("Error adding movie:", error.message);
                alert("Failed to add movie.");
            });
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="container is-fluid">
            <section className="section">
                <h1 className="title">Movie Catalogue</h1>
            </section>
            <div className="columns is-multiline">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div className="column is-one-quarter" key={movie.id}>
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-header-title">{movie.movie}</h2>
                                </div>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src={`https://dummyapi.online/${movie.image}`}
                                            alt={movie.movie}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg";
                                            }}
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="card-footer"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        alignItems: "center",
                                    }}
                                >
                                    <a
                                        href={movie.imdb_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button is-primary"
                                        style={{ width: "100%" }}
                                    >
                                        View on IMDb
                                    </a>
                                    <Link
                                        to={`/movies/${movie.id}`}
                                        className="button is-info"
                                        style={{ width: "100%" }}
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(movie.id)}
                                        className="button is-danger"
                                        style={{ width: "100%" }}
                                    >
                                        Delete Movie
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies available at the moment.</p>
                )}
            </div>
            {/* Add Movie Form */}
            <section className="section">
                <h2 className="title">Add a New Movie</h2>
                <form onSubmit={handleAddMovie}>
                    <div className="field">
                        <label className="label">Movie Name</label>
                        <input
                            className="input"
                            type="text"
                            value={newMovie.movie}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, movie: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label className="label">Rating</label>
                        <input
                            className="input"
                            type="number"
                            value={newMovie.rating}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label className="label">Image URL</label>
                        <input
                            className="input"
                            type="text"
                            value={newMovie.image}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, image: e.target.value })
                            }
                        />
                    </div>
                    <div className="field">
                        <label className="label">IMDb URL</label>
                        <input
                            className="input"
                            type="text"
                            value={newMovie.imdb_url}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, imdb_url: e.target.value })
                            }
                        />
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
