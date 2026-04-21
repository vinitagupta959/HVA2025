const express = require('express');
const router = express.Router();
const path=require('path')

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 80000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 2500,
    category: "Footwear"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1800,
    category: "Clothing"
  },
  {
    id: 4,
    name: "Office Chair",
    price: 6000,
    category: "Furniture"
  },
  {
    id: 5,
    name: "Organic Honey",
    price: 450,
    category: "Groceries"
  }
];
 
 
router.get('/', function(req, res) {
 const category=req.query.category
    
if(category){
let filterCategory=products.filter(function(product){
if(product.category==category){
  return product
}
})
return res.json(filterCategory)
}
 res.json(products) 
});

router.get('/:id',function(req,res){
    const id=req.params.id*1
  const product=products.find(function(ele){
    if(ele.id===id){
      return ele
    }
  })
  if(!product){
    return res.status(404).send({error:"Product Not found"});
  }
  res.json(product)
})

module.exports = router;