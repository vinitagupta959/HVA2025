const express=require('express');
const app=express();
const router=require('./router/curd')
app.use(express.json())


app.use('/api/v1/users',router);

app.listen(3000,function(){
    console.log("Server is running on the port number 3000");
    
}) 
