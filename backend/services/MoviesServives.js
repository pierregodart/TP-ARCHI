class MovieService {

    constructor(repository) {

        this.repository = repository;

    }

    async getMovies() {

        return await this.repository.getAll();

    }

    async getMovie(id) {

        return await this.repository.getById(id);

    }

    async addMovie(movie) {

        return await this.repository.create(movie);

    }

}

module.exports = MovieService;

