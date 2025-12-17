let questionText = document.getElementById("questionText");
let level = document.getElementById("category&diff");
let correctAnswer = document.getElementById("correctMsg");
let errMsg = document.getElementById("errMsg");
let showAnswer = document.getElementById("showAnswer");
let nextQues = document.getElementById("nextQues");
let questionObj;
showAnswer.disabled = false;

questionFetch();
async function questionFetch() {
  try {
    let response = await fetch(
      "https://the-trivia-api.com/v2/questions?limit=1"
    );
    if (response.ok) {
      let data = await response.json();
      questionObj = data;
      displayQues(questionObj);
    } else {
      errMsg.innerText = "Someting went wrong while fetching question.";
    }
  } catch (err) {
    errMsg.innerText = err.message;
  }
}
function displayQues(questionArr) {
  correctAnswer.innerText = "";
  errMsg.innerText = "";
  nextQues.disabled = true;
  questionText.innerText = `Ques:- ${questionArr[0].question.text}`;
  level.innerText = `Category: ${questionArr[0].category} and Difficulty level: ${questionArr[0].difficulty}`;
}
showAnswer.addEventListener("click", function () {
  correctAnswer.innerText = `Correct Answer: ${questionObj[0].correctAnswer}`;
  nextQues.disabled = false;
  showAnswer.disabled = true;
});
nextQues.addEventListener("click", function () {
  questionFetch();
  showAnswer.disabled = false;
});