const express=require('express');
const app=express()
const fs=require('fs');
// const { serialize } = require('v8');
// const { json } = require('stream/consumers');
const Port =3000;
const logger=require('./logger')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(logger)

if (!fs.existsSync('submissions.json')) {
    fs.writeFileSync('submissions.json', JSON.stringify([], null, 2));
}
app.post('/submit',function(req,res){
    if(!req.body.studentName || !req.body.assignmentTitle || !req.body.grade){
        return res.status(400).json({"status":"error","message":"All fields are required"})
    }

    let submissionArr=[];
    if(fs.existsSync('submissions.json')){
        submissionArr=JSON.parse(fs.readFileSync('submissions.json','utf-8'))
        let newSubmission={
            id:submissionArr.length+1,
            studentName:req.body.studentName,
            assignmentTitle:req.body.assignmentTitle,
            grade:req.body.grade,
            submittedAt:new Date().toISOString()
        }
        submissionArr.push(newSubmission);
        fs.writeFileSync('submissions.json',JSON.stringify(submissionArr,null,2))
        return res.status(201).json({"status":"Success",
            "message":"Your submission has been submitted",
            "data":newSubmission
        })
    }

})



app.get('/submissions',function(req,res){
    let allSubmission=JSON.parse(fs.readFileSync('submissions.json','utf-8'))
    res.status(200).json(allSubmission)
})



app.listen(Port,function(){
    console.log("Server is  running on the Port number 3000")
})