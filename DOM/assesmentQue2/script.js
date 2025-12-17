let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let errorMsg = document.getElementById("errorMsg");

celsius.addEventListener("input", function () {
  let celsiusTmp = celsius.value;
  let fahrenheitTmp;
  if (isNaN(celsiusTmp)) {
    errorMsg.innerText = "Not a vaild number";
    fahrenheit.innerText = "";
  } else {
    fahrenheitTmp = (celsiusTmp * 9) / 5 + 32;
    fahrenheit.value = fahrenheitTmp;
    errorMsg.innerText = "";
  }
});

fahrenheit.addEventListener("input", function () {
  let fahrenheitTmp = fahrenheit.value;
  let celsiusTmp = 0;
  if (isNaN(fahrenheitTmp)) {
    errorMsg.innerText = "Not a vaild number";
    celsius.innerText = "";
  } else {
    celsiusTmp = ((fahrenheitTmp - 32) * 5) / 9;
    celsius.value = celsiusTmp;
    errorMsg.innerText = "";
  }
});
