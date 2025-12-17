fetch("https://jsonplaceholder.typicode.com/wrong-url")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    console.log("Data received:", data);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });
