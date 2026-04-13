const express=require('express');
const app=express();
const handlers=require('./middleware/reqMaker')

app.use(express.json());

app.get('/compose',handlers.timestampAdder,handlers.composeCounter,handlers.queryParameter,function(req,res){
    return res.json({"status":"ok","data": req.data})
})

app.listen('3000',function(){
    console.log("Server is running on the Port number 3000");
})