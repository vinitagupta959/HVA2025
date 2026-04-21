function logger(req, res, next) {
  let start = Date.now();

  res.on("finish", function () {
    console.log("HTTP method", req.method);
    console.log("Request path", req.path);
    console.log("Status code", res.statusCode);
    console.log("duration", Date.now() - start);
    if (req.method == "GET") {
      console.log(Object.keys(req.query).length);
    }
    if (req.method == "POST") {
      if (req.body !== undefined && req.body !== null) {
        let isJson;
        if (req.is("application/json")){
isJson=true
        }else{
          isJson=false
        }
        const keyCount = Object.keys(req.body).length;

        console.log("Is JSON:", isJson);
        console.log("Key count:", keyCount);
      }
    }
  });

  next();
}

function debugMiddleware(req,res,next){
  console.log("Debug middleware");
  next()
}

module.exports = {logger,debugMiddleware};
