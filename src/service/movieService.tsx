import http from "../http";
import { Movie } from "../types/movie";






const getAll = async () => {
    return http.get<Movie[]>("/movies");
};

const get = async (id: string) => {
    return http.get<Movie>(`/movies/${id}`);
};

const remove = async (id: string) => {
    return http.delete(`/movies/${id}`);
};

const put = async (movie: Movie) => {
    return http.put("/movies", movie); // Assuming the API supports PUT to add or update a movie
};

const MovieService = {
    getAll,
    get,
    remove,
    put,
};

export default MovieService;
