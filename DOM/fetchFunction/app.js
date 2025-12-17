fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
  return response.json()
})
.then(function(data){
console.log(data)
})
.catch(function (err){
  console.log(err.message)
})

// Write code to print all titles from the list of posts.

data.forEach(function(post){
  console.log(post.title)
})