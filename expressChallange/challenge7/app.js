const express=require('express');
const app=express();
const validateItem=require("./middleware/validateItem")
app.use(express.json());
app.post('/items',validateItem.validateReqbody,function(req,res){
    return res.status(201).json({
         status: "created",
    item: req.validatedItem
    }
        
    )
})
app.post('/items/raw',function(req,res){
    return res.json(
        {
            "status":"received",
            "body": req.body
        }
    )
})

app.listen('3000',function(){
    console.log("Server is runnning on Port number 3000")
})