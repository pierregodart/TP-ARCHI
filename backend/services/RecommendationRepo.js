const RecommendationRepository = require("../../../TP-ARCHI/backend/Repositories/RecommendationRepository");
const RecommendationService = require("./IRecommendationService");

const repository = new RecommendationRepository();
const service = new RecommendationService(repository);

exports.getRecommendations = (req, res) => {

    const genre = req.query.genre;
    const maxDuration = Number(req.query.maxDuration);

    if (!genre || !maxDuration) {

        return res.status(400).json({
            message: "genre et maxDuration sont obligatoires."
        });

    }

    const movies = service.getRecommendations(
        genre,
        maxDuration
    );

    if (movies.length === 0) {

        return res.status(404).json({
            message: "Aucun film trouvé."
        });

    }

    return res.status(200).json(movies);

};