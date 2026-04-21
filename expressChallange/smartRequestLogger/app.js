const express=require('express');
const app=express();
const middleware=require('./middleware/logger')
app.use(express.json());
app.use(middleware.logger)
app.get('/status',function(req,res){
    res.json({"status":"ok"});
})


app.post('/echo',function(req,res){
    res.json({"recived":req.body})
})

app.get('/debug',middleware.debugMiddleware,function(req,res){
    res.json({"debug":true})
})


app.listen(3000,function(){
    console.log("Server is running on the Port 3000")
})