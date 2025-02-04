//Steps for building - things needed:

//README: 

//HTML: questions/ multiple choice answers, submit answer(btn), score total (input)

//CSS: Flex style page and buttons(questions/submit answer/points/win-lose)

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
//if you get 1000 pts (or more than 10 correct)

//Need to initialize the game
//Need a callback to call the audio for 'correct' or 'incorrect' answer - stretch goal

//Event listeners
//'click' on the different buttons for multiple choices
//'click' to submit answer
//


// const quizData = [
//     {
      
//     }
//   ];





const quizContainer = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#question');
const optionsElement = document.querySelector('#options');
const startButton = document.querySelector('#start');
const startScreen = document.querySelector('#start-screen');
const totalScore = document.querySelector('#score');
const resultElement = document.querySelector('#result');
const nextButton = document.querySelector('#next-button');

const optionOne = document.querySelector('#option-one');
const optionTwo = document.querySelector('#option-two');
const optionThree = document.querySelector('#option-three');
const optionFour = document.querySelector('#option-four');

let score = 0;
let currentQuestionIndex = 0;




const loadQuestion = (event) => {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    optionOne.innerText = currentQuestion.options[0];
    optionTwo.innerText = currentQuestion.options[1];
    optionThree.innerText = currentQuestion.options[2];
    optionFour.innerText = currentQuestion.options[3];

    resultElement.innerText = "";

    optionOne.onclick = () => checkAnswer(optionOne.innerText);
    optionTwo.onclick = () => checkAnswer(optionTwo.innerText);
    optionThree.onclick = () => checkAnswer(optionThree.innerText);
    optionFour.onclick = () => checkAnswer(optionFour.innerText);

    nextButton.style.display = "none";
    }

const checkAnswer = (selectedOption) => {
        const currentQuestion = quizData[currentQuestionIndex];
        
        if (selectedOption === currentQuestion.answer) {
            score += 100;
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Incorrect!";
        }
        totalScore.innerText = score;
        nextButton.style.display = "inline-block";
    }




startButton.addEventListener('click', () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

nextButton.addEventListener('click', newQuestion);









