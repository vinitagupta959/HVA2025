function authValidation(req,res,next){
    if (!req.headers["x-client"]) {
    return res.status(400).json({
      ok: false,
      message: "X-client is required",
    });
  }
  if (req.headers["x-client"] !== "postman") {
    return res.status(403).json({
      ok: false,
      message: "Invaild x-client",
    });
  
  }
    next();
}

function checkAuthorization(req,res,next){
      let authorization = req.headers["authorization"];
      if (!authorization) {
        return res.status(401).json({ 
            "ok": false,
            "message": "Authorization header is required" });
      }
      if (authorization !== "Bearer postman-secret") {
        return res.status(403).json({
          ok: false,
          message: "Invaild authorization",
        });
      }
      next()
}


module.exports={authValidation,checkAuthorization};