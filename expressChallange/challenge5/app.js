const express=require('express');
const app=express();
const productRouter=require("./routes/products");
app.use(express.static('public'));
app.use('/products',productRouter)

app.listen(3000,function(){
    console.log("Server is running on port number 3000")
})