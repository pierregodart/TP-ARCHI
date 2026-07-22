Class MovieRepository {
asyncfilter(filters) {
      let sql = `
        SELECT movies.*, genres.name AS genre
        FROM movies
        LEFT JOIN genres
        ON movies.genre_id = genres.id
        WHERE 1=1
    `;

    const values = [];

    if (filters.genre_id) {
        sql += " AND movies.genre_id = ?";
        values.push(filters.genre_id);
    }

    if (filters.release_year) {
        sql += " AND movies.release_year = ?";
        values.push(filters.release_year);
    }

    if (filters.rating) {
        sql += " AND movies.rating >= ?";
        values.push(filters.rating);
    }

    const [rows] = await pool.query(sql, values);

    return rows;
}

asyncsort(sortBy = "title") {

    const allowed = [
        "title",
        "rating",
        "release_year",
        "duration"
    ];

    if (!allowed.includes(sortBy)) {
        sortBy = "title";
    }

    const [rows] = await pool.query(`
        SELECT movies.*, genres.name AS genre
        FROM movies
        LEFT JOIN genres
        ON movies.genre_id = genres.id
        ORDER BY ${sortBy}
    `);

    return rows;
}

asyncscoring() {

    const [rows] = await pool.query(`
        SELECT
            title,
            rating,
            CASE
                WHEN rating >= 8 THEN 'Excellent'
                WHEN rating >= 7 THEN 'Très bon'
                WHEN rating >= 6 THEN 'Bon'
                ELSE 'Moyen'
            END AS score
        FROM movies
    `);

    return rows;
}

router.get("/", movieController.getAll);

router.get("/filter", movieController.filter);

router.get("/sort", movieController.sort);

router.get("/scoring", movieController.scoring);

router.get("/:id", movieController.getById);

router.post("/", movieController.create);
}