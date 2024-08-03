const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox")
const ExitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions = document.querySelector(".Questions");

MyBtn.onclick = ()=>{
    RulesBox.classList.add("activeInfo");
}

ExitButton.onclick = ()=>{
    RulesBox.classList.remove("activeInfo");
}

ContinueButton.onclick=()=>{
    RulesBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuiz");
}