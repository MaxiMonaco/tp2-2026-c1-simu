import express from "express";
// TODO (ejercicio 1): importar getAllMoviesController desde movieController.js
// TODO (ejercicio 2): importar getMovieController y authMiddleware
// TODO (ejercicio 4): importar getAwardWinnersController
// TODO (ejercicio 5): importar searchMoviesController
import {
    getAllMoviesController,
    getMovieController,
    getAwardWinnersController,
    searchMoviesController
}from "../controllers/movieController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// TODO (ejercicio 1): GET /  → getAllMoviesController
router.get("/:id", authMiddleware, getMovieController);
// TODO (ejercicio 4): GET /winners → getAwardWinnersController  ⚠️ debe ir ANTES de /:id
router.get("/winners", getAwardWinnersController);
// TODO (ejercicio 5): GET /search → searchMoviesController       ⚠️ debe ir ANTES de /:id
router.get("/search", searchMoviesController);
// TODO (ejercicio 2): GET /:id → authMiddleware, getMovieController
router.get("/:id", authMiddleware, getMovieController);
//
// ⚠️ IMPORTANTE: las rutas con path fijo (/winners, /search) deben definirse
//    ANTES de la ruta dinámica (/:id), porque Express las evalúa en orden.
//    Si /:id se define primero, "winners" y "search" serán interpretados como un id.

export default router;
