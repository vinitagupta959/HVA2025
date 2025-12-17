let playerInput1 = document.getElementById("player1");
let playerInput2 = document.getElementById("player2");
let startBtn = document.getElementById("startBtn");
let errorPlyer1 = document.getElementById("errorPlyer1");
let errorPlyer2 = document.getElementById("errorPlyer2");
let categoryPage = document.getElementById("categoryPage");
let playerSetup = document.getElementById("playerSetup");
let playerName1 = document.getElementById("playerName1");
let playerName2 = document.getElementById("playerName2");
let startGame = document.getElementById("startGame");
let allCategory = document.getElementById("allCategory");
let errMegPage = document.getElementById("errMegPage");
let questionPage = document.getElementById("questionPage");
let questionText = document.getElementById("que");
let allOptions = document.querySelectorAll(".options");
let allOptionsText=document.querySelectorAll(".optionText");
let player1;
let player2;
let i = 0;
startBtn.addEventListener("click", function () {
  if (playerInput1.value == "" || playerInput1.value == " ") {
    errorPlyer1.innerText = "Enter Vaild Name";
    return;
  } else if (playerInput2.value == "" || playerInput2.value == " ") {
    errorPlyer2.innerText = "Enter Vaild Name";
    return;
  } else {
    errorPlyer1.innerText = "";
    errorPlyer2.innerText = "";
    player1 = playerInput1.value;
    player2 = playerInput2.value;
  }
  console.log(player1, player2);
  playerSetup.style.display = "none";
  categoryPage.style.display = "block";
  playerName1.innerText = player1;
  playerName2.innerText = player2;
});
startGame.addEventListener("click", function () {
  let category = allCategory.value;
  console.log(category);
  fetchQue(category);
});

async function fetchQue(category) {
  try {
    let response = await Promise.all([
      fetch(
        `https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=easy`
      ),
      fetch(
        `https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=medium`
      ),
      fetch(
        `https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=hard`
      ),
    ]);
    response.forEach(function (item) {
      if (!item.ok) {
        errMegPage.innerHTML =
          "<p>Something went wrong while fetching Data</p>";
        throw new Error("Reqest failed");
      }
    });
    let data = await Promise.all(
      response.map(function (item) {
        return item.json();
      })
    );
    if (data[0].length == 0 || data[1].length == 0 || data[2].length == 0) {
      errMegPage.innerHTML =
        "<p>Question not found in this category try with diffenct category</p>";
    } else {
      let allQue = [...data[0], ...data[1], ...data[2]];
      console.log(allQue);
      displayQue(allQue);
    }
  } catch (err) {
    console.log(err.message);
  }
}

function displayQue(questions) {
  categoryPage.style.display = "none";
  questionPage.style.display = "block";
  let item = questions[i];
  let mixAnswer = [...item.incorrectAnswers];
  mixAnswer.push(item.correctAnswer);
  console.log(mixAnswer);
  for (let j = 0; j < mixAnswer.length; j++) {
    let index = Math.floor(Math.random() * (j + 1));
    let temp;
    temp = mixAnswer[j];
    mixAnswer[j] = mixAnswer[index];
    mixAnswer[index] = temp;
  }
  console.log(mixAnswer);
  questionText.innerText = item.question.text;
  console.log(allOptions);
  
  allOptions[0].value = mixAnswer[0];
  allOptionsText[0].innerText= mixAnswer[0];
  allOptions[1].value = mixAnswer[1];
  allOptionsText[1].innerText= mixAnswer[1];
  allOptions[2].value = mixAnswer[2];
  allOptionsText[2].innerText= mixAnswer[2];
  allOptions[3].value = mixAnswer[3];
  allOptionsText[3].innerText = mixAnswer[3];

  allOptions.forEach(function(option){
    option.addEventListener('click',function(){
      option.style.backgroundColor="red";
      console.log(option.value);
      
    })
  })
}
