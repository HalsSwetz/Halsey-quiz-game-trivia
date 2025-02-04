//Steps for building - things needed:

//README: 

//HTML: questions/ multiple choice answers, submit answer(btn), score total (input)

//CSS: grid? style page and buttons(questions/submit answer/points/win-lose)

//Pseudocode
//Set up an array of objects containing {question/multiple choices/answer} data

//Set up cached elements - question, choices, submit answer, audio

//Have a scoreboard with a value added for a question answered correctly, and total score
// -----how does a player lose? negative points for incorrect. 80% correct win condition, under that is losing condition

//Functions:
//Click a button and get a random question with  multiple choices
//Need to be able to choose an answer
//Need to be able to submit answer
//Need score to update with a correct/incorrect answer

//Need a function for win/lose - show a result. How to win? 
//If you score > 80% then you win? if you get 1000 pts (or more than 10 correct)

//Need to initialize the game
//Need a callback to call the audio for 'correct' or 'incorrect' answer - stretch goal

//Event listeners
//'click' on the different buttons for multiple choices
//'click' to submit answer
//
// const quizQuestions = [
//     {
//     question: "",
//     choices: [", , , ,"],
//     answer: ""
//     }
// ]

const quizData = [
    {
      
    }
  ];


const quizContainer = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#question');
const choicesElement = document.querySelector('#choices');
const startButton = document.querySelector('#start');
const startScreen = document.querySelector('#start-screen');
const totalScore = document.querySelector('#score');
const resultElement = document.querySelector('#result');


let score = 0;
let currentQuestion = 0;



const startGame = () => {
    startButton.addEventListener('click');
    console.log("I am clicked");
}

const newQuestion = (event) => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    }   else {
        showResult();
    }
}

// const addScore =

// const resultGame =




startButton.addEventListener('click', () => {

})









