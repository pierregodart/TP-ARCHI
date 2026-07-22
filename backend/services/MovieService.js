const MovieRepository = require("../Repositories/MovieRepository");

class MovieService {

    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async getAll() {
        return await this.movieRepository.getAll();
    }

    async getById(id) {
        return await this.movieRepository.getById(id);
    }

    async create(movie) {
        return await this.movieRepository.create(movie);
    }

    async filter(filters) {
        return await this.movieRepository.filter(filters);
    }

    async sort(sortBy) {
        return await this.movieRepository.sort(sortBy);
    }

    async scoring() {
        return await this.movieRepository.scoring();
    }
}

module.exports = MovieService;