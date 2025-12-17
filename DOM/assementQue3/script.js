// var commentInput = document.getElementById("commentInput");
let postBtn = document.getElementById("postBtn");
let errorMsg = document.getElementById("errorMsg");
let commentCount = document.getElementById("commentCount");
let commentList = document.getElementById("commentList");
let totalComment = 0;
postBtn.addEventListener("click", function () {
  let comment = commentInput.value;
  if (comment.length < 5) {
    errorMsg.innerText = "Comment is too short. It can't be added";
  } else if (comment.length > 200) {
    errorMsg.innerText = "Comment is too long. It can't be added.";
  } else {
    commentList.innerHTML += `<div>
    <p>${comment}</p>
    <button onclick="this.parentElement.remove()">Delete</button></div>`;
    console.log(this.parentElement)
    totalComment += 1;
    commentCount.innerText = `Total Comments: ${totalComment}`;
    commentInput.value = "";
  }
});
