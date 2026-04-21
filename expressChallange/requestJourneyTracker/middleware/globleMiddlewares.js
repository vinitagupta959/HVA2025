function attachRequestId(req,res,next){
    req.requestId=1
    next()
}

function startTimer(req,res,next){
    req.startTimer=Date.now();
    next()
}

function journeyTracker(req,res,next){
    req.journey=[];
    req.journey.push("Global:journeyTracker");
    next();
}

function routeTagger(req,res,next){
    req.journey.push("Route:/journey");
    next()
}

module.exports={attachRequestId,startTimer,journeyTracker,routeTagger}