let gameseq = [];
let usersseq = [];
let btns = ["red", "green", "blue", "yellow"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let h3=document.querySelector("h3");
let highScore = 0;

document.addEventListener("keydown", function () {

    if (started == false) {
        console.log("game started");

        started = true;
        levelUp();

    }
});
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function levelUp() {
    usersseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let ranIndex = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIndex];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    console.log(gameseq);

    flash(ranBtn);
}
function checkAnswer(ind) {
  
    if (usersseq[ind] === gameseq[ind]) {
      if(usersseq.length ===gameseq.length){
        setTimeout(levelUp,1000);
     }}
    else {
        if(level > highScore){
    highScore = level;
    h3.innerText = `High Score: ${highScore}`;
}
        h2.innerHTML = `Game Over,Your score was ${level}<br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
              document.querySelector("body").style.backgroundColor="white";

        },100);
        reset();
    }

}
function btnPress(btn) {
    btn = this;
    flash(btn);
   

    let userColor = btn.getAttribute("id");

    usersseq.push(userColor);
   
    checkAnswer(usersseq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
     started = false;
     gameseq = [];
   usersseq = [];
     level = 0;


}

