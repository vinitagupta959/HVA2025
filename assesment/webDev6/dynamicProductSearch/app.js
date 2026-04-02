const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("displayContainer");
var products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 12000 },
  { name: "Charger", price: 1000 },
  { name: "Tablet", price: 30000 },
];

searchBox.addEventListener('input', function () {
  let currentText = event.target.value.toLowerCase();
  searchResult.innerHTML="";
  if (currentText!=="" && currentText!==" "){
  let resultProduct = productFound(products, currentText);
  if (resultProduct.length > 0) {
    resultProduct.forEach(function (product) {
      searchResult.innerHTML +=`<p>${product.name}</p>`
    })
  } else {
    searchResult.innerHTML = `<p>No products found</p>`
  }
}
});
function productFound(products, currentText) {
  let newProduct = [];
  for (let i = 0; i < products.length; i++) {
    let productName = products[i].name.toLowerCase();
    if (productName.includes(currentText)==true){
      newProduct.push(products[i]);
    }
  }
  return newProduct;
}
