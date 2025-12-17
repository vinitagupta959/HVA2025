let startBtn = document.getElementById("startBtn");
let msg = document.getElementById("msg");

function uploadFile() {
  return (new Promise(function (resolve, reject) {
    msg.innerText = "Uploading file...";
    setTimeout(function () {
      if (Math.random() < 0.3) {
        reject("Upload failed")
      } else {
        resolve();
      }
    }, 3000)
  }))
}

function processdFile() {
  return (new Promise(function (resolve, reject) {
    msg.innerText = "Processing file...";
    setTimeout(function () {
      if (Math.random() < 0.3) {
        reject("Processing failed")
      } else {
        resolve();
      }
    }, 2000)
  }))
}


function saveFile() {
  return (new Promise(function (resolve, reject) {
    msg.innerText = "Saving result...";
    setTimeout(function () {
      if (Math.random() < 0.3) {
        reject("Saving failed")
      } else {
        resolve();
      }
    }, 2000)
  }))
}


startBtn.addEventListener("click", async function () {

  startBtn.disabled = true;
  msg.innerText="";
  msg.style.color="";
  try {
    await uploadFile();
    await processdFile();
    await saveFile();
    msg.innerText = "Upload successful!"
    msg.style.color = "green"
  } catch (err) {
    msg.innerText = "Upload failed! Please try again.";
    msg.style.color = "red";
  }

  startBtn.disabled = false;
})