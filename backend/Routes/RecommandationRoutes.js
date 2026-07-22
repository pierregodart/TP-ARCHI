const express = require("express");
const router = express.Router();

const recommendationController = require("../controllers/RecommendationsControllers");

// GET /recommendations?genre=Action&maxDuration=120
router.get("/", recommendationController.getRecommendations);

module.exports = router;