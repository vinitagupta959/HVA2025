function timestampAdder(req,res,next){
    if(!req.data){
        req.data={
            timestamp:Date.now()
        }
    }
    next()
}
let composeCount=0
function composeCounter(req,res,next){
composeCount+=1
req.data.count=composeCount
next()
}


function queryParameter(req,res,next){
    const user=req.query.user
    if(!user || typeof user !== "string" || !user.trim()){
            return res.status(400).json({"status":"error","message":"Missing or invalid user"})
        
    }
    next()
}

module.exports={
    timestampAdder,
    composeCounter,
    queryParameter
}