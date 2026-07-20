const bcrypt = require("bcrypt");
const UserRepository = require("../Repositories/UserRepository");

class AuthService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(username, email, password) {

        const user = await this.userRepository.findByEmail(email);

        if (user) {
            throw new Error("Cet email est déjà utilisé.");
        }

        const hash = await bcrypt.hash(password, 10);

        await this.userRepository.create(
            username,
            email,
            hash
        );

        return {
            message: "Compte créé avec succès."
        };
    }

    async login(email, password) {

        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email ou mot de passe incorrect.");
        }

        const ok = await bcrypt.compare(password, user.password);

        if (!ok) {
            throw new Error("Email ou mot de passe incorrect.");
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email
        };

    }

}

module.exports = AuthService;