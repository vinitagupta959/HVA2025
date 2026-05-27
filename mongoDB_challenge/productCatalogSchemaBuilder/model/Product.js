const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    inStock:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("Product",productSchema);