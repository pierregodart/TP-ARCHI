const express = require("express");
const router = express.Router();

const MovieRepository = require("../Repositories/MoviesRepository");
const MovieService = require("../services/MoviesService");
const movieController = require("../controllers/MovieController");

const repository = new MovieRepository();
const service = new MovieService(repository);

router.get("/", movieController.getAll);

router.get("/:id", movieController.getById);

router.get("/filter", movieController.filter);

router.get("/sort", movieController.sort);

router.get("/scoring", movieController.scoring);

router.post("/", movieController.create);