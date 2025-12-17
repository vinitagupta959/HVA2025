let btn=document.getElementById('main');
let textArea=document.getElementById('taxt');
btn.addEventListener('click',function(){
  textArea.innerText="Processing...";
  setTimeout(function(){
    textArea.innerText="Done!";
  },2000);
})