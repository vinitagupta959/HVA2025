let redBtn=document.getElementById("red");
let blueBtn=document.getElementById('blue');
let greenBtn=document.getElementById('green');
let yellowBtn=document.getElementById('yellow');
let box=document.getElementById('box');

redBtn.addEventListener('click',function(){
    box.style.backgroundColor="red";
});

yellowBtn.addEventListener('click',function(){
    box.style.backgroundColor="yellow";
})

blueBtn.addEventListener('click',function(){
    box.style.backgroundColor="blue";
})

greenBtn.addEventListener('click',function(){
    box.style.backgroundColor="green";
})