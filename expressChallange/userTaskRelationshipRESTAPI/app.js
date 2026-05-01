const express=require('express');
const app=express();

app.use(express.json());
let userId=0
let taskId=0
let users=[];
let tasks=[];




app.listen(3000,function(){
    console.log("Server is running...")
})











