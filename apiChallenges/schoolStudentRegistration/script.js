let fullName = document.getElementById("fullName");
let studentAge = document.getElementById("studentAge");
let studentGrade = document.getElementById("studentGrade");
let allcheckbox = document.querySelectorAll(".checkbox");
let scholarshipCheck = document.getElementById("scholarship");
let submitBtn = document.getElementById("submitBtn");
let confirmationMsg = document.getElementById("confirmationMse");
let errorMsg=document.getElementById("errorMsg");
errorMsg.innerText = "";
confirmationMsg.innerText = "";

submitBtn.addEventListener("click", function () {
  let name = fullName.value;
  let age = studentAge.value;
  let grade = studentGrade.value;
  let favoriteSubjects = [];
  allcheckbox.forEach(function (item) {
    if (item.checked) {
      favoriteSubjects.push(item.value);
    }
  });
  let hasScholarship;
  if (scholarshipCheck.checked) {
    hasScholarship = true;
  } else {
    hasScholarship = false;
  }
  if (name == "") {
    errorMsg.innerText = "Please Enter the name";
    return;
  } else if (age <= 0) {
    errorMsg.innerText = "Please Enter Vaild Age";
    return;
  } else if (favoriteSubjects.length < 1) {
    errorMsg.innerText = "Choose at least one subject";
    return;
  } else {
    errorMsg.innerText=""
    confirmationMsg.innerText = "";
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        grade: grade,
        favoriteSubjects: favoriteSubjects,
        hasScholarship: hasScholarship,
      }),
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Could not save student. Please try again.");
        }
        return response.json();
      })
      .then(function (data) {
        let savedStudent = data.json;
        console.log(savedStudent);
        console.log(savedStudent.name);
        
        confirmationMsg.innerHTML = `<h3>Student Registered Successfully</h3>
      <p><strong>Name:</strong> ${savedStudent.name}</p>
      <p><strong>Grade:</strong> ${savedStudent.grade}</p>
      <p><strong>Favorite subject:</strong> ${savedStudent.favoriteSubjects.join(
        ", "
      )}</p>
      <p><strong>Scholarship:</strong> ${
        savedStudent.hasScholarship ? "Yes" : "No"
      }</p>
    `;
      })
      .catch(function (error) {
        console.log("Error:", error.message);
        errorMsg.innerText="Something went wrong"+error.message;
      });
  }
});