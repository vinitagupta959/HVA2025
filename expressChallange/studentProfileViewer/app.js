const express=require('express');
const app=express();
const students = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Rahul" }
];

app.get('/students',function(req,res){
    res.json({students})
})
app.get('/students/:id',function(req,res){
    const studentId=req.params.id*1;
 const student=students.find(function(ele){
    return ele.id==studentId
 })
    if(!student){
        return res.status(404).json({ "error": "Student not found" })
    }
  res.json({student})
 
})
app.listen(3000,function(){
    console.log("Server running on porn number 3000");
    
})