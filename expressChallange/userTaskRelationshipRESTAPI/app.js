const express=require('express');
const user = require('./routers/user');
const task = require('./routers/task');

const app=express();

app.use(express.json());
 app.use('/api/v1',user);
 app.use('/api/v1/users',task);



app.listen(3000,function(){
    console.log("Server is running...")
})











