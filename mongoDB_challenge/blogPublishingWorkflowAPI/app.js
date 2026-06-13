require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/postRouter')
const app=express();
app.use(express.json())
app.use(router)
mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log("MongoDb connected successfully")
}).catch(function(err){
    console.log("MonogDb connection failed");
    
});

app.listen(3000,function(){
    console.log("Server is running on port number");
    
})