const mongoose=require('mongoose');

const loginLog=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    success:{
        type:Boolean,
        required:true
    },
    reason:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("loginLog",loginLog)