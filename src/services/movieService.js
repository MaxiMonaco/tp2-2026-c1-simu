import { findAllMovies, findMovieById, findAwardWinners, findMoviesByTitle } from "../data/movieData.js";

// TODO (ejercicio 1): llamar a findAllMovies con { page, limit } y retornar el resultado
export async function getAllMovies({ page, limit }) {
    return await findAllMovies({page,limit});
}

// TODO (ejercicio 2): llamar a findMovieById y retornar el resultado
export async function getMovieByID(id) {
    return await findMovieById(id);
}

// TODO (ejercicio 4): llamar a findAwardWinners y retornar el resultado
export async function getAwardWinners() {
    return await findAwardWinners();
}

// TODO (ejercicio 5): llamar a findMoviesByTitle con el query recibido y retornar el resultado
export async function searchMoviesByTitle(query) {
    return await findMoviesByTitle(query);
}
