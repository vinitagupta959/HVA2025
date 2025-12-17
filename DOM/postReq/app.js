fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is my new post content",
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
    console.log("Post created:", data);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });