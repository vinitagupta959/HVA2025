let startBtn = document.getElementById("startBtn");
let allBox = document.querySelectorAll(".boxDeactive");
let scoreCon = document.getElementById("score");
let timeUpMsg = document.getElementById("timeUpMsg");
let score = 0;
let activationIntervalId = null;
let gameRunning = false;
let randomBoxIndex = null;

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  score = 0;
  timeUpMsg.innerText = "";
  gameRunning = true;
  activateBox();
  activationIntervalId = setInterval(activateBox, 2000);
  updateSocre();
  setTimeout(function () {
    clearInterval(activationIntervalId);

    timeUpMsg.innerText = "Game Over";
    allBox.forEach(function (box) {
      box.style.backgroundColor = "gray";
      startBtn.disabled = false;
    });
  }, 30000);
});

allBox.forEach(function (box, index) {
  box.addEventListener("click", function () {
    console.log("Click");
    checkClick(index);
  });
});
function updateSocre() {
  scoreCon.innerText = "Score: " + score;
}
function activateBox() {

  let curentBox = Math.floor(Math.random() * allBox.length);
  randomBoxIndex = curentBox;

  allBox[curentBox].style.backgroundColor = "green";

  activeTimeoutId = setTimeout(function () {
    if (randomBoxIndex === curentBox) {
        if (score > 0) {
      score--;
    }
    updateSocre();
      allBox[randomBoxIndex].style.backgroundColor = "gray";
      randomBoxIndex=null
    }
  }, 1000);
}

function checkClick(clickedIndex) {
  if (clickedIndex === randomBoxIndex) {
    score++;
    if (activeTimeoutId) {
      clearTimeout(activeTimeoutId);
      activeTimeoutId = null;
    }
    allBox[randomBoxIndex].style.backgroundColor = "gray";
    randomBoxIndex = null;
  } else {
    if (score > 0) {
      score--;
    }
  }
  updateSocre();
}
