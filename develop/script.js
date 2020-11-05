const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

let questions = [
    {
        question : "What does API stand for?",
        choiceA : "artificial programming interface",
        choiceB : "application programming interlace",
        choiceC : "application programming interface",
        choiceD : "artificial property interface",
        correct : "C"
    },
    {
        question : "What does CSS stand for?",
        choiceA : "cascading style sheets",
        choiceB : "cascading sheets style",
        choiceC : "computing style sheets",
        choiceD : "API",
        correct : "A"
    },
    {
        question : "What does HTML stand for?",
        choiceA : "hypertext markup link",
        choiceB : "hyperlink text markup",
        choiceC : "hotmail",
        choiceD : "hypertext markup language",
        correct : "D"
    },
    {
        question : "What is JavaScript?",
        choiceA : "used to create a link",
        choiceB : "a coding language for Android decvices",
        choiceC : "used to create dynamic web applications",
        choiceD : "artificial property interface",
        correct : "C"
    },
    {
        question : "What is a variable?",
        choiceA : "numbers, strings, Booleans",
        choiceB : "static websites",
        choiceC : "application programming interface",
        choiceD : "",
        correct : "A"
 }
];


