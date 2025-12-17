let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let messageElem = document.getElementById("msg");
btn1.disabled = false;
btn2.disabled = true;
btn3.disabled = true;
function btnFirstClick() {
  return (new Promise(function (resolve) {
    btn1.disabled = true;
    setTimeout(function () {
      btn2.disabled = false;
      resolve()
    }, 1000)

  }))
}
function btnSecClick() {
  return (new Promise(function (resolve) {
    btn2.disabled = true;
    setTimeout(function () {
      btn3.disabled = false;
      resolve();
    }, 1000)

  }))
}
function btnThirdClick() {
  return (new Promise(function (resolve) {
    btn3.disabled = true;
    setTimeout(function () {
      messageElem.innerText = "All steps completed! Thank you.";
      resolve();
    }, 1000)
  }))
}

btn1.addEventListener('click', function () {
  btnFirstClick()
    .then(function () {
      return new Promise(function(resolve) {
        btn2.addEventListener('click', function() {
          btnSecClick().then(resolve);
        }, { once: true });
      });
    })
    .then(function () {
      return new Promise(function(resolve){
        btn3.addEventListener('click', function() {
          btnThirdClick().then(resolve);
        }, { once: true });
      });
    })
    .catch(function (err) {
      console.log(err.message);
    });
});