const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{13}$/
    },
    publishedYear:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
    default:Date.now
 }

})

module.exports=mongoose.model("BookSchema",bookSchema)