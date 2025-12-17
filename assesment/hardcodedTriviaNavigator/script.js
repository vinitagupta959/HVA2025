const questions = [
  {
    questionText: "Which planet is known as the Red Planet?",
    correctAnswer: "Mars",
    incorrectAnswers: ["Venus", "Jupiter", "Mercury"],
  },
  {
    questionText: "What is the capital of Japan?",
    correctAnswer: "Tokyo",
    incorrectAnswers: ["Kyoto", "Osaka", "Nagoya"],
  },
  {
    questionText: "Which instrument has 88 keys?",
    correctAnswer: "Piano",
    incorrectAnswers: ["Guitar", "Violin", "Flute"],
  },
  {
    questionText: "Which gas do plants absorb from the atmosphere?",
    correctAnswer: "Carbon dioxide",
    incorrectAnswers: ["Oxygen", "Nitrogen", "Helium"],
  },
  {
    questionText: "Who wrote 'Romeo and Juliet'?",
    correctAnswer: "William Shakespeare",
    incorrectAnswers: ["Charles Dickens", "Mark Twain", "Jane Austen"],
  },
  {
    questionText: "What is the largest ocean on Earth?",
    correctAnswer: "Pacific Ocean",
    incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  },
];

let questionText = document.getElementById("questionText");
let allOptions = document.querySelectorAll(".options");
let allOptionText = document.querySelectorAll(".optionText");
let questionStatus = document.getElementById("questionStatus");
let nextBtn = document.getElementById("nextBtn");
let i = 0;
let correctAnswerIndex;
displayQuestion(questions);

function displayQuestion(questions) {
  if(i==5){
    nextBtn.innerText="All questions are over."
  }
  let currentQue = questions[i];
  let allAnswer = currentQue.incorrectAnswers;
  allAnswer.push(currentQue.correctAnswer);
  console.log(allAnswer);
  for (let j = 0; j < allAnswer.length; j++) {
    let index = Math.floor(Math.random() * (j + 1));
    let temp;
    temp = allAnswer[index];
    allAnswer[index] = allAnswer[j];
    allAnswer[j] = temp;
  }
  questionText.innerText = `Question ${i + 1}:- ${currentQue.questionText}`;
  allOptions[0].value = allAnswer[0];
  allOptionText[0].innerText = allAnswer[0];
  allOptions[1].value = allAnswer[1];
  allOptionText[1].innerText = allAnswer[1];
  allOptions[2].value = allAnswer[2];
  allOptionText[2].innerText = allAnswer[2];
  allOptions[3].value = allAnswer[3];
  allOptionText[3].innerText = allAnswer[3];
}

for (let j = 0; j < allOptions.length; j++) {
  allOptions[j].addEventListener("click", function () {
    correctAnswerIndex = allOptions[j].value;

    checkAnswer(questions, correctAnswerIndex);
  });
}

function checkAnswer(questions, answer) {
  if (answer == questions[i].correctAnswer) {
    questionStatus.innerText = "Correct Answer";
  } else {
    questionStatus.innerText = `Opps!,Wrong answer. Correct answer is ${questions[i].correctAnswer}`;
  }
}
nextBtn.addEventListener("click", function () {
  i += 1;
  correctAnswerIndex.value="";
  questionStatus.innerText=""
  displayQuestion(questions);
});
