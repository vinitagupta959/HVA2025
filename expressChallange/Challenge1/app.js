const express=require('express');
const app=express()
app.get('/event/:eventName',function(req,res){
     const eventName=req.params.eventName
     res.json({
        event:eventName,
        message: `we get event ${eventName}`
     })
})
app.get('/search',function(req,res){
    const type =req.query.type
    const keyword= req.query.keyword
    if(!keyword){
        return res.status(400).json({ "error": "Keyword is required" })
    }
    res.json({
        type:type,
        keyword:keyword,
        message:`The type is ${type} and keyword is ${keyword}`
    })
})

app.listen(3000,function(){
    console.log("Server running on port 3000")
})