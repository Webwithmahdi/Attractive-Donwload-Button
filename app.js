const button = document.querySelector(".button");
const defaultValue = document.querySelector(".default-value");
const progress = document.querySelector(".progress");
const doneEl = document.querySelector(".done");

button.addEventListener("click", animFunc);

function animFunc() {
  button.style.height = "8px";
  defaultValue.style.display = "none";
  setTimeout(progressAnim, 100);
  setTimeout(doneFunc, 3100);
  setTimeout(progressDone, 3150);
}

function progressAnim() {
  progress.classList.add("progress-anim");
}
function doneFunc() {
  doneEl.style.transform = "translate(-50%,-50%) scale(1)";
}
function progressDone() {
  progress.style.opacity = "0";
  button.style.background = "none";
}
