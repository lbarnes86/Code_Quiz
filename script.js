const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById('timer')
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

let shuffledQuestions, currentQuestionIndex
let score = 0
let secondsLeft = 10;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.6)
    currentQuestionIndex = 0
    score = 0
    secondsLeft = 10
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
    
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } then 
}

        
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
    element.classList.add ('correct')
    } else {
    element.classList.add('wrong')
    }
    }
function clearStatusClass(element, ) {
    element.classList.remove('corret')
    element.classList.remove('wrong')
}

const questions = [
    {
    question: "What does HTML stand for?",
    answers: [
    { text: 'hyperlink markup link', correct: false },
    { text: 'hypertext markup language', correct: true },
    { text: 'hyper markup text', correct: false },
    { text: 'hotmail language', correct: false }
    ]
}, 
{
question: "What is Web api?",
answers: [
{ text: 'application programming interface', correct: true },
{ text: 'application programming interlace', correct: false },
{ text: 'application population interface', correct: false },
{ text: 'application interfasce program', correct: false}
]
},
{
question: "What is Bootstrap?",
answers: [
{ text: 'a feature in GitHub', correct: false },
{ text: 'used to tie your hard driuve to CPU', correct: false },
{ text: 'free tool to create repo', correct:  false },
{ text: 'free tool to create websites and web apps', correct: true }
]
},
{
question: "What does CSS stand for?",
answers: [
{ text: 'cascading sheet style', correct: false },
{ text: 'cascading style sheet', correct: true },
{ text: 'computer style sheet', correct: false },
{ text: 'computer sheet style', correct: false}
]
},
{
question: "What is JavaScript?",
answers: [
{ text: 'used to purchase email account', correct: false },
{ text: 'used for backing up device', correct: false },
{ text: 'used to cretae dynamic websites', correct: true },
{ text: 'CPU mainframe', correct: false}
]
}
] 