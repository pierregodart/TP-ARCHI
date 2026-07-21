const AuthService = require("../services/AuthService");

const authService = new AuthService();

exports.register = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const result = await authService.register(
            username,
            email,
            password
        );

        res.status(201).json(result);

    } catch (err) {

        res.status(400).json({
            message: err.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await authService.login(
            email,
            password
        );

        res.json(user);

    } catch (err) {

        res.status(401).json({
            message: err.message
        });

    }

};