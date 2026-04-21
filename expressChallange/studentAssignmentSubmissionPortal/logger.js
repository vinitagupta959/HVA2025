function logReq(req,res,next){
    console.log(req.method)
    console.log(req.URL)
    console.log(Date.now())
    next()
}


module.exports=logReq;

