const api = "http://localhost:3000";

const moviesDiv = document.getElementById("movies");
const button = document.getElementById("searchBtn");

loadMovies();

button.addEventListener("click", searchMovies);

async function loadMovies(){

    const response = await fetch(`${api}/movies`);

    const movies = await response.json();

    displayMovies(movies);

}

async function searchMovies(){

    const genre = document.getElementById("genre").value;
    const duration = document.getElementById("duration").value;

    let url = `${api}/recommendations?`;

    if(genre){
        url += `genre=${genre}&`;
    }

    if(duration){
        url += `maxDuration=${duration}`;
    }

    const response = await fetch(url);

    const movies = await response.json();

    displayMovies(movies);

}

function displayMovies(movies){

    moviesDiv.innerHTML = "";

    if(movies.length===0){

        moviesDiv.innerHTML="<h2>Aucun film trouvé.</h2>";
        return;

    }

    movies.forEach(movie=>{

        moviesDiv.innerHTML += `
            <div class="card">

                <img src="${movie.poster}" alt="${movie.title}">

                <h2>${movie.title}</h2>

                <p class="genre">${movie.genre}</p>

                <p>${movie.synopsis}</p>

                <p><strong>Durée :</strong> ${movie.duration} min</p>

                <p><strong>Note :</strong> ⭐ ${movie.rating}</p>

                <a href="${movie.trailer}" target="_blank">
                    Voir la bande-annonce
                </a>

            </div>
        `;

    });

}