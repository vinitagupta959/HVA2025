let questionNum = document.getElementById("questionNum");
let questionCategory = document.getElementById("questionCategory");
let questionText = document.getElementById("questionText");
let allOptions = document.querySelectorAll(".option");
let privousBtn = document.getElementById("privousBtn");
let nextBtn = document.getElementById("nextBtn");
let i = 0;
let question;
fetchQuestion();
function fetchQuestion() {
  let response = fetch("https://the-trivia-api.com/v2/questions?limit=5");
  response
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong while fetching data");
        reject();
      }
    })
    .then(function (data) {
        question=data;
      displayQuestion(question);
      
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
function displayQuestion(allQuestions) {
if (i==0){
    privousBtn.disabled=true;
}else{
    privousBtn.disabled=false;
}
if(i==4){
    nextBtn.disabled=true;
}else{
    nextBtn.disabled=false
}

  let currentQue = allQuestions[i];
  let allAnswer = currentQue.incorrectAnswers;
  allAnswer.push(currentQue.correctAnswer);
  for (let j = 0; j < allAnswer.length; j++) {
    let index = Math.floor(Math.random() * (j + 1));
    let temp;
    temp = allAnswer[index];
    allAnswer[index] = allAnswer[j];
    allAnswer[j] = temp;
  }
  questionNum.innerText=`Question ${i + 1}`;
  questionCategory.innerText = `Category: ${currentQue.category}`;
  questionText.innerText = `Que:- ${currentQue.question.text}`;
  
  allOptions[0].innerText = `A: ${allAnswer[0]}`;
  allOptions[1].innerText = `B: ${allAnswer[1]}`;
  allOptions[2].innerText = `C: ${allAnswer[2]}`;
  allOptions[3].innerText = `D: ${allAnswer[3]}`;
}
nextBtn.addEventListener('click',function(){
    i+=1;
    displayQuestion(question);
});
privousBtn.addEventListener('click',function(){
    if(i>0){
        i-=1
    }
    displayQuestion(question);
})