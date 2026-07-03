class Movie {

    constructor(
        id,
        title,
        synopsis,
        duration,
        release_year,
        rating,
        poster,
        trailer,
        genre_id
    ) {

        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
        this.duration = duration;
        this.release_year = release_year;
        this.rating = rating;
        this.poster = poster;
        this.trailer = trailer;
        this.genre_id = genre_id;

    }

}

module.exports = Movie;