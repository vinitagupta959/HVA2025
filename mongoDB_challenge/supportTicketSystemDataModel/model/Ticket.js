const mongoose=require('mongoose');

const ticketSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true,
        enum: ["low", "medium", "high"]
    },
    status:{
        type:String,
        default:"open"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


module.exports=mongoose.model("Ticket",ticketSchema);