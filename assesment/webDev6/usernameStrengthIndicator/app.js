const usernameInput = document.getElementById("username");
const usernamePara = document.getElementById("usernamePara");
const strengthPara = document.getElementById("strengthPara");

usernameInput.addEventListener("input", function () {
  let currentUsername = event.target.value;
  usernamePara.innerText = currentUsername;
  let strength=""
   strengthPara.innerText = "";
  if (currentUsername.length < 5) {
    if (isNaN(currentUsername)) {
      strength= "Good";
      strengthPara.classList.add(`goodText`);
       strengthPara.classList.remove(`strongText`);
      strengthPara.classList.remove(`weakText`);
    } else {
      strength= "Weak";
      strengthPara.classList.remove(`goodText`);
       strengthPara.classList.remove(`strongText`);
      strengthPara.classList.add(`weakText`);
    }
  } else if (currentUsername.length < 10) {
    if (isNaN(currentUsername)) {
      strength= "Strong";
       strengthPara.classList.add('strongText');
      strengthPara.classList.remove(`goodText`);
      strengthPara.classList.remove(`weakText`);
    } else {
      strength= "Good";
      strengthPara.classList.add(`goodText`);
    strengthPara.classList.remove(`strongText`);
      strengthPara.classList.remove(`weakText`);
    }
  } else {
    strength = "Strong";
     strengthPara.classList.add('strongText');
      strengthPara.classList.remove(`goodText`);
      strengthPara.classList.remove(`weakText`);
  }
   strengthPara.innerText = strength;
   strengthPara.classList.add(`${colorClass}`);
});

function isNaN(name) {
  let i = 0;
  found = false;
  while (i < name.length) {
    if (name[i] >= "0" && name[i] <= "9") {
      found = true;
      break;
    }
    i += 1;
  }
  return found;
}
