const div = document.getElementById("div");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const audio = new Audio("introduction.mp3");

function hideDiv() {
div.style.display = "none";
}
yesButton.addEventListener("click", () => {
audio.play();
video.play();
hideDiv();
setTimeout(function(){
window.location.href = 'index2.html';
},112*1000);
});
noButton.addEventListener("click", () => {
video.play();
hideDiv();
setTimeout(function(){
    window.location.href = 'index2.html';
    },112*1000);
});