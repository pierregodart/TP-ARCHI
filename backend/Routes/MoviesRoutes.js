const express = require("express");
const router = express.Router();

const MovieRepository = require("../Repositories/MoviesRepository");
const MovieService = require("../services/MoviesServives");

const repository = new MovieRepository();
const service = new MovieService(repository);

// Tous les films
router.get("/", async (req, res) => {
    try {
        const movies = await service.getMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Film par ID
router.get("/:id", async (req, res) => {
    try {
        const movie = await service.getMovie(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Film introuvable"
            });
        }

        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ajouter un film
router.post("/", async (req, res) => {
    try {
        await service.addMovie(req.body);
        res.status(201).json({
            message: "Film ajouté avec succès"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;