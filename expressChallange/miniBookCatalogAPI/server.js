const express=require('express');
const app=express()
const router=require('./routers/route');
const logger=require('./middlware/logger')
console.log(logger);
app.use(express.json());
app.use(logger)
app.use('/',router);

app.listen(3000,function(){
    console.log("Server is running on the port number 3000")
});
