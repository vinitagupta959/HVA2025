require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=require('./routes/bookRoutes')
app.use(express.json());
app.use(router)

mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log("MongoDB connected successfully")
}).catch(function(){
    console.log("MongoDB connection failed")
})


app.listen(3000,function(){
    console.log('Server is running on the port 3000')
})