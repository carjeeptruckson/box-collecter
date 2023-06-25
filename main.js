var blueBox = document.querySelector(".blue-box");
var greenBoxes = document.querySelectorAll(".green-box");
var score = 0;

function onGreenBoxClick() {
  score++;
  document.querySelector(".score").innerHTML = score;
}

for (var i = 0; i < greenBoxes.length; i++) {
  greenBoxes[i].addEventListener("click", onGreenBoxClick);
}
