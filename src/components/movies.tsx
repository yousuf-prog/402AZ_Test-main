import React, { useEffect, useState } from "react";
import MovieService from "../service/movieService";
import { Movie } from "../types/movie"; // Importing Movie type
import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [newMovie, setNewMovie] = useState<Movie>({
        id:"",
        title:"",
        writer:"",
        image:"",
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

    const handleDelete = (id: string) => {
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
                    id:"",
                    title:"",
                    writer:"",
                    image:"",
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
                <h1 className="title">Cinema Library</h1>
            </section>
            <div className="columns is-multiline">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div className="column is-one-quarter" key={movie.id}>
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-header-title">{movie.title}</h2>
                                </div>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src={`${movie.writer}`}
                                            alt={movie.title}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://m.media-amazon.com/images/S/pv-target-images/8ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg";
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
                                        href={movie.title}
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
                            value={newMovie.title}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, title: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label className="label">id</label>
                        <input
                            className="input"
                            type="number"
                            value={newMovie.id}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, id: (e.target.value) })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label className="label">title</label>
                        <input
                            className="input"
                            type="text"
                            value={newMovie.title}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, title: e.target.value })
                            }
                        />
                    </div>
                    <div className="field">
                        <label className="label">writer</label>
                        <input
                            className="input"
                            type="text"
                            value={newMovie.writer}
                            onChange={(e) =>
                                setNewMovie({ ...newMovie, writer: e.target.value })
                            }
                        />
                    </div>
                    <div className="field">
                        <label className="label">image</label>
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
                        <button type="submit" className="button is-success">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
