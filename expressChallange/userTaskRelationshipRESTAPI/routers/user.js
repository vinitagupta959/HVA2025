const express=require('express');
const router=express.Router();
let {users,task}=require('../data/memory');
let userReqValidater=require('../middleware/userAuth')

router.post('/users',userReqValidater,function(req,res){
let id=users.length+1
let {name,email}=req.body
let newUser={
id,name,email
}
users.push(newUser);
res.status(201).json({
    "success":true,
    "data":newUser,
    "message":"New user created"
})
})


router.get('/users',function(req,res){
    res.status(200).json({
        "success":true,
        "data":users,
        "message":"All users fetched"
    })
})


module.exports=router