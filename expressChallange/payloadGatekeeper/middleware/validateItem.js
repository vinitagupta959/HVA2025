function validateReqbody(req,res,next){
const body=req.body;
if(!body){
    return res.status(400).json(
        {
            error:"Request body is required"
        }
    )
}

if(typeof body!=="object" || Array.isArray(body)){
    return res.status(400).json({
        error:"Request body must be JSON object"
    })
}

if (typeof body.title!=="string" || body.title.trim()==""){
return res.status(400).json({
    error:"title must be string and not empty"
})
}

if(typeof body.quantity!=="number" || body.quantity<=0){
    return res.status(400).json({
        error:"Quantity must be number and greater than 0"
    })
}
 req.validatedItem = {
    title: body.title.trim(),
    quantity:body.quantity
  };

next()
}

module.exports = validateReqbody;