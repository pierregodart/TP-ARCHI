const movies = require("../data/movies");
const IRecommendationRepository = require("./IRecommendationRepository");

class RecommendationRepository extends IRecommendationRepository {

    getAll() {
        return movies;
    }

}

module.exports = RecommendationRepository;