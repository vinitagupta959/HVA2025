let form = document.getElementById("postForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    })
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      let responseDiv = document.getElementById("response");
      responseDiv.innerHTML = `
        <h3>New Post Created</h3>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
        <p><strong>ID:</strong> ${data.id}</p>
      `;
    })
    .catch(function(error) {
      console.log("Error:", error.message);
    });
});
