/* const express=require('express');
const app=express();
app.use(express.json())

app.get('/inspect',function(req,res){
    res.json({
        "method":req.method,
        "path":req.path ,
        "params":req.params,
        "query":req.query,
        "headers":{
            "content-type":req.headers["content-type"],
                "authorization":req.headers["authorization"],
                "x-client":req.headers["x-client"]
        },
        "body": {}
    })
})
app.post('/inspect',function(req,res){
     res.json({
        "method":req.method,
        "path":req.path ,
        "params":req.params,
        "query":req.query,
        "headers":{
            "content-type":req.headers["content-type"],
                "authorization":req.headers["authorization"],
                "x-client":req.headers["x-client"]
        },
        "body": req.body
    })
})

app.put('/inspect/:id',function(req,res){
 res.json({
        "method":req.method,
        "path":req.path ,
        "params":req.params,
        "query":req.query,
        "headers":{
            "content-type":req.headers["content-type"],
                "authorization":req.headers["authorization"],
                "x-client":req.headers["x-client"]
        },
        "body": req.body
    })
})


app.delete('/inspect/:id',function(req,res){
res.json({
        "method":req.method,
        "path":req.path ,
        "params":req.params,
        "query":req.query,
        "headers":{
            "content-type":req.headers["content-type"],
                "authorization":req.headers["authorization"],
                "x-client":req.headers["x-client"]
        },
        "body": {}
    })
})
 */








const express = require('express');
const app = express();

app.use(express.json());

function inspectResponse(req, bodyData) {
    return {
        method: req.method,
        path: req.path,
        params: req.params,
        query: req.query,
        headers: {
            "content-type": req.headers["content-type"],
            "authorization": req.headers["authorization"],
            "x-client": req.headers["x-client"] 
        },
        body: bodyData
    };
}

app.get('/inspect', function(req, res) {
    res.status(200).json(inspectResponse(req, {}));
});

app.post('/inspect', function(req, res) {
    res.status(200).json(inspectResponse(req, req.body));
});

app.put('/inspect/:id', function(req, res) {
    res.status(200).json(inspectResponse(req, req.body));
});

app.delete('/inspect/:id', function(req, res) {
    res.status(200).json(inspectResponse(req, {}));
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});