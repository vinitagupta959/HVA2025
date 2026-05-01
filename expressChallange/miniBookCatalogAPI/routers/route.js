const express=require('express');
const router=express.Router();
let books=[];

router.get('/books',function(req,res){
    res.status(200).json({
        "success":true,
        "data":books,
        "message":"All books Featched"
    })
});

router.post('/books',function(req,res){
    let errors=[];
    if (!req.body.title){
        errors.push("Title is required")
    }

    if(!req.body.author){
        errors.push("Author is required")
    }
     if(!req.body.genre){
        errors.push("Genre is required")
     }

    if(!req.body.publishedYear){
        errors.push("Published Year is required")
    }
    if (errors.length>0){
        return res.status(400).json({
            "success":false,
            "errors":errors, 
            "message":"validation failed"
        })
    }else{
        let newBook={
            "title":req.body.title,
            "author":req.body.author,
            "genre":req.body.genre ,
            "publishedYear":req.body.publishedYear
        }
        books.push(newBook)
        return res.status(201).json({
            "success":true ,
            "data":newBook,
        "message": "New book added."
        })
    }
})


module.exports=router