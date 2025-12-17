const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const muteBtn = document.getElementById("muteBtn");
const allBox = Array.from(document.querySelectorAll(".boxDeactive"));
const scoreCon = document.getElementById("score");
const timeUpMsg = document.getElementById("timeUpMsg");
const countdownEl = document.getElementById("countdown");

let score = 0;
let activationIntervalId = null;
let activeTimeoutId = null;
let gameTimerId = null;
let remaining = 30;
let gameRunning = false;
let randomBoxIndex = null;
let penaltyEnabled = true;

function updateScore() {
  scoreCon.innerText = "Score: " + score;
}
function updateCountdown() {
  countdownEl.innerText = remaining + "s";
}

// helper to clear active timeout safely
function clearActiveTimeout() {
  if (activeTimeoutId) {
    clearTimeout(activeTimeoutId);
    activeTimeoutId = null;
  }
}

// deactivate all boxes
function deactivateAll() {
  allBox.forEach((b) => b.classList.remove("active"));
  randomBoxIndex = null;
}

// pick random index
function randIndex() {
  return Math.floor(Math.random() * allBox.length);
}

/* core activation */
function activateBox() {
  // guard
  if (allBox.length === 0) return;

  // clear prior active immediately
  if (randomBoxIndex !== null) {
    allBox[randomBoxIndex].classList.remove("active");
    randomBoxIndex = null;
  }
  clearActiveTimeout();

  // pick and set active
  const idx = randIndex();
  randomBoxIndex = idx;
  const box = allBox[idx];
  box.classList.add("active");

  // schedule auto-deactivate / penalty after 1s
  activeTimeoutId = setTimeout(() => {
    // if still the same active box → missed
    if (randomBoxIndex === idx) {
      if (penaltyEnabled && score > 0) score--;
      updateScore();
      box.classList.remove("active");
      randomBoxIndex = null;
    }
    activeTimeoutId = null;
  }, 1000);
}

/* click handler */
function checkClick(i) {
  if (!gameRunning) return;
  if (i === randomBoxIndex) {
    // correct
    score++;
    updateScore();
    clearActiveTimeout();
    allBox[randomBoxIndex].classList.remove("active");
    randomBoxIndex = null;
  } else {
    // wrong click: optional small penalty (commented out)
    // if (score>0) { score--; updateScore(); }
    // provide non-blocking feedback: flash
    const b = allBox[i];
    b.style.boxShadow = "0 6px 20px rgba(239,68,68,0.25)";
    setTimeout(() => (b.style.boxShadow = ""), 220);
  }
}

/* start game */
function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  startBtn.disabled = true;
  resetBtn.disabled = true;
  timeUpMsg.innerText = "";
  score = 0;
  updateScore();
  remaining = 30;
  updateCountdown();

  // immediate first activation
  activateBox();
  activationIntervalId = setInterval(activateBox, 2000);

  // countdown UI timer
  gameTimerId = setInterval(() => {
    remaining--;
    updateCountdown();
    if (remaining <= 0) {
      endGame();
    }
  }, 1000);
}

/* end game cleanup */
function endGame() {
  gameRunning = false;
  startBtn.disabled = false;
  resetBtn.disabled = false;

  if (activationIntervalId) {
    clearInterval(activationIntervalId);
    activationIntervalId = null;
  }
  clearActiveTimeout();
  if (gameTimerId) {
    clearInterval(gameTimerId);
    gameTimerId = null;
  }

  deactivateAll();
  timeUpMsg.innerText = "Game Over — Final Score: " + score;
  updateScore();
  remaining = 0;
  updateCountdown();
}

/* reset game state (not start) */
function resetGame() {
  if (gameRunning) {
    endGame();
  }
  score = 0;
  updateScore();
  deactivateAll();
  remaining = 30;
  updateCountdown();
  timeUpMsg.innerText = "";
}

/* attach click/touch handlers */
allBox.forEach((box, idx) => {
  // support both pointer and keyboard 'Enter' press
  box.addEventListener("click", () => checkClick(idx));
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      checkClick(idx);
    }
  });
});

/* controls */
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
muteBtn.addEventListener("click", () => {
  penaltyEnabled = !penaltyEnabled;
  muteBtn.innerText = penaltyEnabled ? "Penalty ON" : "Penalty OFF";
  muteBtn.style.background = penaltyEnabled ? "#111827" : "#064e3b";
});

/* initial UI */
updateScore();
updateCountdown();
