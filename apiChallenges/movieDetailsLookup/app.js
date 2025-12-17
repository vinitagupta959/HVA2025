let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
let movieListCon = document.getElementById("movieList");

searchBtn.addEventListener("click", async function () {
  if (searchBox.value !== "") {
    let movieTitle = searchBox.value;
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=c162dc19&t=${movieTitle}`
      );
      if (response.ok) {
        let data = await response.json();
        if (data.Response === "False") {
          movieListCon.innerHTML = `<p>Movie or series not found.</p>`;
          return;
        }
        displayData(data);
      } else {
        movieListCon.innerHTML = `<p>Something went wrong while fetching data.</p>`;
      }
    } catch (err) {
      console.log(err.message);
    }
  } else {
    movieListCon.innerHTML = `<p>Please enter a movie or series name.</p>`;
  }
});

function displayData(movie) {
  movieListCon.innerHTML = `
  <div class="movie-info"> 
    <img id="moviePoster" src="${movie.Poster}">
    <div class="details">
    <h3 id="movieName" class="movie-title">${movie.Title}</h3>
    <p id="movieYear">Release Year: ${movie.Year}</p>
    <p id="movieType">Type:${movie.Type}</p>
    <p id="imdbRating">IMDB Rating: ${movie.imdbRating}</p>
    <p id="plotSummary">Plot: ${movie.Plot}</p>
    </div>
  </div>`;
}
