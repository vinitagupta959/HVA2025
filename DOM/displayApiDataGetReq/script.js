fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let postsContainer = document.getElementById("posts");

    // Display only first 10 posts for clarity
    data.slice(0, 10).forEach(function(post) {
      let postDiv = document.createElement("div");
      postDiv.className = "post";

      let title = document.createElement("h3");
      title.innerText = post.title;

      let body = document.createElement("p");
      body.innerText = post.body;

      postDiv.appendChild(title);
      postDiv.appendChild(body);
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });