let happyBtn = document.getElementById("happyBtn");
let sadBtn = document.getElementById("sadBtn");
let angryBtn = document.getElementById("angryBtn");
let tiredBtn = document.getElementById("tiredBtn");
let excitedBtn = document.getElementById("excitedBtn");
let moodMessage = document.getElementById("moodMessage")

function displayMsg(msg) {
  moodMessage.innerText = msg;
}

happyBtn.addEventListener('click', function () {
  angryBtn.style.backgroundColor = "";
  sadBtn.style.backgroundColor = ""
  happyBtn.style.backgroundColor = "black"
  happyBtn.style.color = "white";
  tiredBtn.style.backgroundColor = ""
  excitedBtn.style.backgroundColor = ""
  angryBtn.style.color = "";
  sadBtn.style.color = ""
  tiredBtn.style.color = ""
  excitedBtn.style.color = ""
  displayMsg("Great! Keep smiling today!");
})
sadBtn.addEventListener('click', function () {
  angryBtn.style.backgroundColor = "";
  sadBtn.style.backgroundColor = "black"
  sadBtn.style.color = "white";
  happyBtn.style.backgroundColor = ""
  tiredBtn.style.backgroundColor = ""
  excitedBtn.style.backgroundColor = ""
  angryBtn.style.color = "";
  happyBtn.style.color = ""
  tiredBtn.style.color = ""
  excitedBtn.style.color = ""
  displayMsg("It's okay to feel down. Take a deep breath.")
});
angryBtn.addEventListener('click', function () {
  angryBtn.style.backgroundColor = "black";
  sadBtn.style.backgroundColor = ""
  happyBtn.style.backgroundColor = ""
  tiredBtn.style.backgroundColor = ""
  excitedBtn.style.backgroundColor = ""
  angryBtn.style.color = "white";
  sadBtn.style.color = ""
  happyBtn.style.color = ""
  tiredBtn.style.color = ""
  excitedBtn.style.color = ""
  displayMsg("Try stepping away for a moment.")
})

tiredBtn.addEventListener('click', function () {
  angryBtn.style.backgroundColor = "";
  sadBtn.style.backgroundColor = ""
  happyBtn.style.backgroundColor = ""
  tiredBtn.style.backgroundColor = "black";
  tiredBtn.style.color = "white";
  excitedBtn.style.backgroundColor = ""
  angryBtn.style.color = "";
  sadBtn.style.color = ""
  happyBtn.style.color = ""
  excitedBtn.style.color = ""
  displayMsg("Make sure to rest and recharge.")
})

excitedBtn.addEventListener('click', function () {
  angryBtn.style.backgroundColor = "";
  sadBtn.style.backgroundColor = ""
  happyBtn.style.backgroundColor = ""
  tiredBtn.style.backgroundColor = ""
  excitedBtn.style.backgroundColor = "black";
  excitedBtn.style.color = "white";
  angryBtn.style.color = "";
  sadBtn.style.color = ""
  happyBtn.style.color = ""
  tiredBtn.style.color = ""
  displayMsg("Love the energy! Keep it going!");
})