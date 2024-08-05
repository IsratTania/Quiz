const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox")
const ExitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions = document.querySelector(".Questions");


const timeCount = document.querySelector(".TimeCount .Seconds");



MyBtn.onclick = ()=>{
    RulesBox.classList.add("activeInfo");
}

ExitButton.onclick = ()=>{
    RulesBox.classList.remove("activeInfo");
}

ContinueButton.onclick=()=>{
    RulesBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuiz");
    showQuestions(0);
    startTimer(15);
}


const nextBtn = document.querySelector(".nextBtn");
let que_count=0;
let counter;
let timeValue=15;


nextBtn.onclick=()=>{
    if(que_count < questions.length - 1 ){
        que_count++;
        showQuestions(que_count);
        clearInterval(counter);
        startTimer(timeValue);
    }
    else{
        console.log("You Have Completed Your Task ");
    }
}

function showQuestions(index){
    const que_text = document.querySelector('.text');
    const option_list = document.querySelector (".MyOptions");
    let option_tag ='<div class="options">'+questions[index].options[0]  +'</div>'
                    +'<div class="options">'+questions[index].options[1]  +'</div>'
                    +'<div class="options">'+questions[index].options[2]  +'</div>'
                    +'<div class="options">'+questions[index].options[3]  +'</div>'
    let que_tag = "<span>" + questions[index].numb + '.' + questions[index].question + "</span>";
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const total_que = document.querySelector(".total_que");
    let total_queTag = '<p>' + questions[index].numb + ' Of 5 </p>';
    total_que.innerHTML=total_queTag;



    const option = option_list.querySelectorAll(".options");
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}


let tickIcon ='<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon ='<div class="cross icon"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter);
    const option_list = document.querySelector (".MyOptions");
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);

    }else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

        for(let i=0; i<allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","options correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }
        }

    }

    for(let i=0; i<allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
}


function startTimer(time){
    counter = setInterval(timer, 1000 );
    function timer(){
       timeCount.textContent = time; 
       time--;
     if(time<9){
        let addZero = timeCount.textContent;
        timeCount.textContent = 0 + addZero;
     }
    if(time<0){
        clearInterval(counter);
        timeCount.textContent = "00";
    }

    }
}