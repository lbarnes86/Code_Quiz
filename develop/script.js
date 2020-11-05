//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreDiv");

// create questions
let questions = [
    {
        question : "What does API stand for?",
        choiceA : "artificial programming interface",
        choiceB : "application programming interlace",
        choiceC : "application programming interface",
        choiceD : "artificial property interface",
        correct : "C"
    },{
        question : "What does CSS stand for?",
        choiceA : "cascading style sheets",
        choiceB : "cascading sheets style",
        choiceC : "computing style sheets",
        choiceD : "API",
        correct : "A"
    },{
        question : "What does HTML stand for?",
        choiceA : "hypertext markup link",
        choiceB : "hyperlink text markup",
        choiceC : "hotmail",
        choiceD : "hypertext markup language",
        correct : "D"
    },{
        question : "What is JavaScript?",
        choiceA : "used to create a link",
        choiceB : "a coding language for Android decvices",
        choiceC : "used to create dynamic web applications",
        choiceD : "artificial property interface",
        correct : "C"
    },{
        question : "What is a variable?",
        choiceA : "numbers, strings, Booleans",
        choiceB : "static websites",
        choiceC : "application programming interface",
        choiceD : "a repository",
        correct : "A"
    }
];

// create variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
}







const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender() {
    if (count <= questionTime ) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count ++;
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        } else { clearInterval(TIMER);
                scoreRender();
        }
    }
}
let lastQuestionIndex = questions.lenght - 1; 
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

function progressRender(){ 
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}
function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

let TIMER = 
    setInterval(counterRender, 1000);
    stop running: setInterval()
    clearInterval( );