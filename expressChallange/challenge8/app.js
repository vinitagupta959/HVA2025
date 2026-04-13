const express=require('express');
const app=express();
const Port=3000;
const middelware=require('./middleware/accesControl')
app.use(express.json());

app.get('/public',function(req,res){
    res.json({"public":true}
)
})
app.get('/profile',middelware.checkAccessKey,function(req,res){
res.json({"profile":true,"access": req.access})
})

app.get('/admin/stats',middelware.checkAccessKey,middelware.attachAdminMeta,function(req,res){
    res.json({"admin":true,"meta": req.adminMeta,"access": req.access})
})

app.listen(Port, function(){
    console.log("Server is running on the Port numbe 3000")
})