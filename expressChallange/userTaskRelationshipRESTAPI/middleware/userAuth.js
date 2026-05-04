function userReqValidater(req,res,next){
    let {name,email}=req.body;
    let errors=[]
    if(!name){
errors.push("Name is required")
    }
    if(typeof name !== "string"){
        errors.push("Name must be a string")
    }


    if (!email){
        errors.push("Email is required");

    }
    if(typeof email !== "string"){
        errors.push("Email must be a string")
    }

    if(errors.length>0){
        return res.status(400).json({
            "success":false ,
            "data":errors ,
            "message":"Validation failed"
        })
    }
    next()
}


module.exports=userReqValidater