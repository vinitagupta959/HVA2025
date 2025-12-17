let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
let errMsg = document.getElementById("errorMsg");
let newsList = document.getElementById("newsList");

searchBtn.addEventListener("click", async function fetchNews() {
  if (searchBox.value !== "") {
    let keyword = searchBox.value;
    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=2f2121e4e26d4245adbdb30072af6598`
      );
      if (response.ok) {
        let data = await response.json();
        displayNews(data);
      } else {
        errMsg.innerText = "Something went wrong while fetching data.";
      }
    } catch (err) {
      console.log(err.message);
    }
  } else {
    errMsg.innerText = "Please enter a search keyword.";
  }
});

function displayNews(data) {
  let arr = data.articles;

  newsList.innerHTML = "";
  arr.forEach(function (item, index) {
    if (index < 9) {
      let imageHTML = "";
      if (item.urlToImage && item.urlToImage !== null) {
        imageHTML = `<img class="newsImg" src="${item.urlToImage}" alt="news image">`;
      } else {
        imageHTML = `<p class="noImg">No image available</p>`;
      }
      newsList.innerHTML += ` <div class=newsCard>
    <h3 class="newsTitle">${item.title}</h3>
    <p class="sourceName">${item.source.name}</p>
     ${imageHTML}
    <p class="newsDes">${item.description}</p>
  </div>`;
    }
  });
}
