let welcomeId = document.querySelector("#welcomeId");
let quizId = document.querySelector("#quizId");
let endQuiz = document.querySelector("#endQuiz");
let resultId = document.querySelector("#resultId");

let startQuizBtn = document.querySelector("#startQuizBtn");
let finalScore = document.querySelector("#finalScore");

let userNameInput = document.querySelector("#userName-text");
let userNameForm = document.querySelector("#userName-form");
let submituserNames = document.querySelector("#submituserNames");
let userNameCountSpan = document.querySelector("#userName-count");
let userNameList = document.querySelector("#userName-list");
let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");

let question = document.querySelector("#question");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");

let questionArray = [{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console log"],
    correctAnswerIndex: "3"
}, {
    question: "The condition in an if / esle statement is enclosed within _____.",
    answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswerIndex: "2"
}, {
    question: "Arrays in JavaScript can be used to store _____",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswerIndex: "3"
}, {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1. quotes", "2. curly brackets", "3. commas", "4. parentheses"],
    correctAnswerIndex: "0"
}, {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. alerts", "3. booleans", "4. numbers"],
    correctAnswerIndex: "1"
}]


let i = 0;
let answerChoice = "";
let correctAnswer = "";

let listOfAnswers = [];
let userNames = [];
let highScores = [];


let codeTimer = 60;
let timerFinish = document.querySelector("#counterId").textContent;

init();

function init() {
 
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));


    if (storedHighScores !== null) {
        highScores = storedHighScores.sort((a, b) => b - a);
    }

}

function codeQuiz() {

    let currentQuestion = questionArray[i];
    question.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.answers[0];
    answer2.textContent = currentQuestion.answers[1];
    answer3.textContent = currentQuestion.answers[2];
    answer4.textContent = currentQuestion.answers[3];
    correctAnswer = currentQuestion.correctAnswerIndex;

}

$(".answer").click(function() {
    answerChoice = this.value;
    listOfAnswers.push(answerChoice);

    


    if (answerChoice === correctAnswer) {
        correct.setAttribute("style", "display: inline-block;");
        wrong.setAttribute("style", "display: none;");
        resultId.setAttribute("style", "display: inline-block;")
            // console.log("Correct")
    }
    if (answerChoice !== correctAnswer) {
        codeTimer -= 10;
        $("#counterId").html('00:' + codeTimer);
        // console.log("-10 Seconds!")
        correct.setAttribute("style", "display: none;");
        wrong.setAttribute("style", "display: inline-block;");
        // console.log("Wrong")
    }
    if (i === 4) {
        quizId.setAttribute("style", "display: none;");
        endQuiz.setAttribute("style", "display: block;");
    }
    if (i !== 4) {
        return i = i + 1, codeQuiz();
    }
});

function quizTimer() {

    welcomeId.setAttribute("style", "display: none;");
    quizId.setAttribute("style", "display: inline-block;");

    let timer = setInterval(function() {

        codeTimer--;
        $("#counterId").html('00:' + codeTimer);
        if (codeTimer === -1) clearInterval(timer)

        if (codeTimer === -1) {

            quizId.setAttribute("style", "display: none;");
            endQuiz.setAttribute("style", "display: block;");
        }

        if (listOfAnswers.length === 5) {
            quizId.setAttribute("style", "display: none;");
            endQuiz.setAttribute("style", "display: block;");
            clearInterval(timer)
            finalScore.textContent = codeTimer;

        }

    }, 1000);

};

function storeHighscores() {
    // Sort highScores in Descending order - most time left is highest score
    highScores.sort((a, b) => {
            if (a.score < b.score) {
                return 1
            } else {
                return -1
            }
        })
        // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

startQuizBtn.addEventListener("click", codeQuiz);
startQuizBtn.addEventListener("click", quizTimer);

userNameForm.addEventListener("submit", function(event) {
    event.preventDefault();

  
    let userNameText = userNameInput.value.trim().toUpperCase();
    let userNames = [];

    if (userNameText === "") {
        return;
    };
  
    userNames.push(userNameText);
    // console.log(userNames);
    userNameInput.value = "";

    generateNewHighScore();

    function generateNewHighScore() {

       
        userNameList.textContent = "";
        

        let lastUser = userNames[(userNames.length - 1)];
        let userScore = parseInt(finalScore.textContent);
        userNameCountSpan.textContent = userNames.length;

        let newHighscore = { user: lastUser, score: userScore }
        highScores.push(newHighscore);

        storeHighscores();
        window.location.href = "./highscores.html";
    };
});