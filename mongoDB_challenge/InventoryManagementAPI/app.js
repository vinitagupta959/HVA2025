require('dotenv').config()
const express = require("express");
const mongoose=require('mongoose');
const Product = require("./models/Product");
const productRoutes = require("./routes/productRoutes");
const app = express();


app.use(express.json());

app.use(productRoutes);



mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log("MongoDB Connected");
    
}).catch(function(err){
    console.log(err);
    
})


app.listen(3000, () => {
    console.log("Server running");
});