//import { json } from "express/lib/response.js";
import { getAllMovies, getMovieByID, getAwardWinners, searchMoviesByTitle } from "../services/movieService.js";

// TODO (ejercicio 1): leer page y limit de req.query (ver ejemplo en userController.js)
// Llamar a getAllMovies y responder con el array. Manejar errores con status 500.
export async function getAllMoviesController(req, res) {
 try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const movies = await getAllMovies({page, limit});

    res.json(movies);
 } catch (error) {
    res.status(500).json({message: "Error al obtener las películas"})
 }

}

// TODO (ejercicio 2): leer req.params.id, llamar a getMovieByID
// Responder 404 si no existe, o la película en JSON si existe. Manejar errores con status 500.
export async function getMovieController(req, res) {
    try{
        const { id } =req.params;
        const movie = await getMovieByID(id)

        if(!movie) {
            return res.status(404).json({ message: "Película no encontrada" })
        }
        res.json(movie);

    }catch (error) {
        res.status(500).json({message: "Error al buscar la película"})
    }
}

// TODO (ejercicio 4): llamar a getAwardWinners y responder con el array en JSON
// Manejar errores con status 500
export async function getAwardWinnersController(req, res) {
    try {
        const movies = await getAwardWinners();
        res.json(movies);
    } catch (error){
        res.status(500).json({ message: "Error al obtener ganadores" })
    }
}

// TODO (ejercicio 5): leer el query param `q` de req.query
// Si no viene `q`, responder 400 con mensaje "Se requiere un término de búsqueda"
// Si viene, llamar a searchMoviesByTitle y responder con el array. Manejar errores con status 500.
export async function searchMoviesController(req, res) {
    try {
        const query = req.query.q;

        if(!query){
            return res.status(400).json({ message: "Se requiere un término de búsqueda" })
        }
        const movies = await searchMoviesByTitle(query);
        res.json(movies)
    } catch (error) {
        res.status(500).json({ message: "Error en la búsqueda" });
    }
}
