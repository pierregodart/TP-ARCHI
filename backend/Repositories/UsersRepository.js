 const pool = require("../config/database");

class UserRepository {

    async findByEmail(email) {

        const [rows] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        return rows[0];
    }

    async create(username, email, password) {

        await pool.query(
            `INSERT INTO users(username,email,password)
             VALUES(?,?,?)`,
            [username, email, password]
        );

    }

}

module.exports = UserRepository;