const express = require("express");
const router = express.Router();
const resources = require("../resourcesData");
const { logger } = require("../middleware/logger");

router.get("/resources", logger, function (req, res) {
  res.status(200).json(resources);
});

router.get("/resources/category/:categoryName", logger, function (req, res) {
  let categoryName = req.params.categoryName;

  let filteredArr = resources.filter(function (ele) {
    return ele.category === categoryName;
  });

  res.status(200).json({
    category: categoryName,
    resources: filteredArr,
  });
});


router.get('/resources/available',logger,function(req,res){
    let filteredArr=resources.filter(function(ele){
        return ele.available===true
    })
res.status(200).json({
    resources: filteredArr,
  });

})

router.get('/resources/:id',logger,function(req,res){
    let id=req.params.id*1
    let resource;
    resources.forEach(function(ele){
        if (ele.id===id){
            resource=ele
        }
    })
    console.log(resource)
    res.status(200).json({
    resources: resource,
  });
})


router.get('/resources/location/:locationName',logger,function(req,res){
    let locationName=req.params.locationName;
    let filteredArr = resources.filter(function (ele) {
    return ele.location === locationName;
  });

  res.status(200).json({
    Location: locationName,
    resources: filteredArr,
  });
})

module.exports = router;
