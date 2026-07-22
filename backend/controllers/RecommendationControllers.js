const RecommendationRepository = require("./RecommendationRepository");
const RecommendationService = require("../services/recommendationService");

const repository = new RecommendationRepository();
const service = new RecommendationService(repository);

exports.getRecommendations = (req, res) => {

    const genre = req.query.genre;
    const maxDuration = parseInt(req.query.maxDuration);

    const movies = service.getRecommendations(
        genre,
        maxDuration
    );

    if (movies.length === 0) {
        return res.status(404).json({
            message: "Aucun film trouvé."
        });
    }

    res.status(200).json(movies);
};