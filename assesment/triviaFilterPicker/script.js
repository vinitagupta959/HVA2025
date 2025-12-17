let categorySelectionPage = document.getElementById("categorySelection");
let questionPage = document.getElementById("questionPage");
let categorySelectionDropdown = document.getElementById("categorySelection");
let difficultyLevel = document.getElementById("difficultyLevel");
let fetchQueBtn = document.getElementById("fetchQueBtn");
let questionDifficulty = document.getElementById("questionDifficulty");
let questionCategory = document.getElementById("questionCategory");
let questionText = document.getElementById("questionText");
let allOptions = document.querySelectorAll(".option");
let privousBtn = document.getElementById("privousBtn");
let nextBtn = document.getElementById("nextBtn");
let i = 0;

fetchQueBtn.addEventListener("click", async function () {
  try {
    let category = categorySelectionDropdown.value;
    let diffilcuty = difficultyLevel.value;
    let response = await fetch(
      ` https://the-trivia-api.com/v2/questions?limit=1&categories=${category}&difficulties=${diffilcuty}`
    );
    if (!response.ok) {
      throw new Error("Something went wring while fetching data");
    } else {
      let data = await response.json();
      displayQuestion(data);
    }
  } catch (err) {}
});

function displayQuestion(question) {
  categorySelectionPage.style.display = "none";
  questionPage.style.display = "block";
  let allAnswer=question[0].incorrectAnswers;
  allAnswer.push(question[0].correctAnswer);
  questionDifficulty.innerText = `Difficulty leve:- ${question[0].difficulty}`;
  questionCategory.innerText = `Category: ${question[0].category}`;
  questionText.innerText = `Que:- ${question[0].question.text}`;

  allOptions[0].innerText = `A: ${allAnswer[0]}`;
  allOptions[1].innerText = `B: ${allAnswer[1]}`;
  allOptions[2].innerText = `C: ${allAnswer[2]}`;
  allOptions[3].innerText = `D: ${allAnswer[3]}`;
}
nextBtn.addEventListener('click',function(){
    categorySelectionPage.style.display="block";
    questionPage.style.display="none";
})