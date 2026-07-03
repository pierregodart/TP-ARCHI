DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
USE movie_db;

-- ===========================
-- TABLE DES UTILISATEURS
-- ===========================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===========================
-- TABLE DES GENRES
-- ===========================

CREATE TABLE genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- ===========================
-- TABLE DES FILMS
-- ===========================

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT,
    duration INT NOT NULL,
    release_year INT NOT NULL,
    rating DECIMAL(3,1) DEFAULT 0,
    poster VARCHAR(255),
    trailer VARCHAR(255),
    genre_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (genre_id)
        REFERENCES genres(id)
        ON DELETE SET NULL
);

-- ===========================
-- INSERTION DES GENRES
-- ===========================

INSERT INTO genres(name)
VALUES
('Action'),
('Science Fiction'),
('Animation'),
('Drame'),
('Comédie'),
('Horreur'),
('Romance'),
('Aventure');

-- ===========================
-- INSERTION DES FILMS
-- ===========================

INSERT INTO movies
(title,synopsis,duration,release_year,rating,poster,trailer,genre_id)

VALUES

(
'Top Gun Maverick',
'Après plus de trente ans de service, Maverick entraîne une nouvelle génération de pilotes.',
131,
2022,
8.4,
'topgun.jpg',
'https://youtu.be/qSqVVswa420',
1
),

(
'Dune Part Two',
'Paul Atréides poursuit son destin sur Arrakis.',
166,
2024,
8.8,
'dune2.jpg',
'https://youtu.be/U2Qp5pL3ovA',
2
),

(
'Vice Versa 2',
'Les émotions de Riley évoluent avec son adolescence.',
96,
2024,
7.8,
'viceversa2.jpg',
'https://youtu.be/LEjhY15eCx0',
3
),

(
'John Wick 4',
'John Wick affronte la Grande Table.',
169,
2023,
8.0,
'johnwick4.jpg',
'https://youtu.be/qEVUtrk8_B4',
1
),

(
'Oppenheimer',
'Biographie de J. Robert Oppenheimer.',
180,
2023,
8.5,
'oppenheimer.jpg',
'https://youtu.be/uYPbbksJxIg',
4
),

(
'The Batman',
'Batman enquête sur une série de meurtres.',
176,
2022,
7.9,
'batman.jpg',
'https://youtu.be/mqqft2x_Aa4',
1
);