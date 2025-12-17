let searchBox=document.getElementById('searchBox');
const products = document.querySelectorAll("#productContainer p");
searchBox.addEventListener('input',function(){
  let inputText=searchBox.value.toLowerCase();
  products.forEach(function(product) {
    const text=product.textContent.toLowerCase();
    if(text.includes(inputText)){
        product.style.display="block"
    }else{
        product.style.display="none"
    }
  });
});