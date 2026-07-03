class Movie {
    constructor(id, title, genre, duration, rating, year, liked) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.rating = rating;
        this.year = year;
        this.liked = liked;
    }
}

module.exports = Movie;