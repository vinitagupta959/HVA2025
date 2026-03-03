let movieInput = document.getElementById("movieInput");
let movieRelease = document.getElementById("movieRelease");
let submitBtn = document.getElementById("submitBtn");
let displayMovieCon = document.getElementById("displayMovieCon");
let movieArr = [];
let allVoteUpBtn;
let allVoteDownBtn;
submitBtn.addEventListener("click", function () {
  let movieName = movieInput.value;
  let movieReleaseDate = movieRelease.value;
  let movie = {
    name: movieName,
    year: movieReleaseDate,
    votes: 0,
  };
  movieArr.push(movie);
  displayallMovie();
  movieInput.value = "";
  movieRelease.value = "";
});

function displayallMovie() {
  displayMovieCon.innerHTML = "";
  movieArr.forEach(function (movie) {
    displayMovieCon.innerHTML += `
 <div class="movieCart"><p>Movie Name: ${movie.name}</p>
 <p>Release Date: ${movie.year}</p>
 <p>${movie.votes}</p>
 <button class="voteUp">Vote up</button>
 <button class="voteDown">Vote Down</button>
 </div>
 `;
  });
  // let movieCart = document.querySelectorAll(".movieCart");
  // movieCart.style.display = "flex";
  allVoteUpBtn = document.querySelectorAll(".voteUp");
  allVoteDownBtn = document.querySelectorAll(".voteDown");
}
allVoteDownBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    movieArr[index].votes -= 1;
    sortMovie();
  });
});

allVoteUpBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    movieArr[index].votes += 1;
  });
   displayallMovie();
});
function sortMovie() {
  movieArr.sort(function (a, b) {
    return b.votes - a.votes;
  });
  displayallMovie();
}
