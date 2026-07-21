const pool = require("../config/database");

class MovieRepository {

    async getAll() {

        const [rows] = await pool.query(`
            SELECT
                movies.*,
                genres.name AS genre
            FROM movies
            LEFT JOIN genres
            ON movies.genre_id = genres.id
        `);

        return rows;

    }

    async getById(id) {

        const [rows] = await pool.query(
            "SELECT * FROM movies WHERE id = ?",
            [id]
        );

        return rows[0];

    }

    async create(movie) {

        const sql = `
            INSERT INTO movies
            (title,synopsis,duration,release_year,rating,poster,trailer,genre_id)

            VALUES (?,?,?,?,?,?,?,?)
        `;

        await pool.query(sql, [

            movie.title,
            movie.synopsis,
            movie.duration,
            movie.release_year,
            movie.rating,
            movie.poster,
            movie.trailer,
            movie.genre_id

        ]);

    }

}

module.exports = MovieRepository;

