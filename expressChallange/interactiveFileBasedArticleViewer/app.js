const express=require('express')
const app=express()
const PORT=3000
 const articles = [
  {
    slug: "node-intro",
    title: "Introduction to Node.js",
    content: "Node.js is a runtime environment that allows you to run JavaScript on the server."
  },
  {
    slug: "express-basics",
    title: "Express Basics",
    content: "Express is a minimal and flexible Node.js framework for building web applications."
  },
  {
    slug: "middleware-guide",
    title: "Understanding Middleware",
    content: "Middleware functions execute during the request-response cycle in Express."
  }
];;
app.use(express.static('public'));
app.get('/articles',function(req,res){
    const result=[]
    articles.forEach(function(article){
        let item={title:article.title,
            slug:article.slug
        }
        result.push(item)
    })
    res.json(result)
})
app.get('/articles/:slug',function(req,res){
    const slug=req.params.slug;

    const article=articles.find(function(ele){
        return ele.slug===slug
    })
    if(!article){
        return  res.status(404).json({
            error:"Article not found"
        })
    }
    res.json(article)
})


app.listen(PORT,function(){
console.log("Server is running on port 3000");
})