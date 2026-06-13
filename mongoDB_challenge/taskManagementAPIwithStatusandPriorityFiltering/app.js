require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes=require('./routes/taskRouter')

app.use(express.json())
app.use(routes)
mongoose.connect(process.env.MONGO_URL).then(function () {
    console.log('MongoDB connected successfully')
}).catch(function(err){
    console.log("MongoDB connection failed")
})



app.listen(3000,function(){
    console.log("Server is running on the port number 3000")
})