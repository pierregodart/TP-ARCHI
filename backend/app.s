const express = require("express");
const cors = require("cors");

const filmRoutes = require("./routes/filmRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue sur l'API de recommandation de films 🎬"
    });
});

app.use("/films", filmRoutes);

module.exports = app;