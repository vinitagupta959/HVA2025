let textPara = document.getElementById("textPara");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let size = 16;
textPara.style.fontSize=size+"px";
increaseBtn.addEventListener('click', function () {
  size += 2;
  textPara.style.fontSize = size + "px";

})
decreaseBtn.addEventListener('click', function () {
  size -= 2;
  textPara.style.fontSize = size + "px";
})