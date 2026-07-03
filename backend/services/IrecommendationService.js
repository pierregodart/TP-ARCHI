class RecommendationService {

    constructor(repository) {
        this.repository = repository;
    }

    getRecommendations(genre, maxDuration) {

        return this.repository
            .getAll()

            .filter(movie =>
                movie.genre.toLowerCase() === genre.toLowerCase())

            .filter(movie =>
                movie.duration <= maxDuration)

            .filter(movie =>
                movie.year >= 2020)

            .sort((a, b) => {

                if (a.liked !== b.liked) {
                    return b.liked - a.liked;
                }

                return b.rating - a.rating;

            });

    }

}

module.exports = RecommendationService;