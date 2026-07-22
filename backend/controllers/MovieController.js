const MovieRepository = require("../Repositories/MovieRepository");
const MovieService = require("../services/MoviesService");

const repository = new MovieRepository();
const movieService = new MovieService(repository);


exports.getAll = async (req, res) => {

    try {

        const movies = await movieService.getAll();

        res.json(movies);

    } catch (err) {

        res.status(500).json(err);

    }

};