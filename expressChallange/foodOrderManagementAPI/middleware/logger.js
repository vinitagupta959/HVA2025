function logger(req,res,next){
    console.log("Req Method: ",req.method);
    console.log("Req URL: ", req.url);
    next();
}

module.exports=logger;