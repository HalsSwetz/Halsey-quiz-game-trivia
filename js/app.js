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


const quizData = [
    {
      question: "What cabbage dish is a staple in Korean cuisine?",
      options: ["Sauerkraut", "Kimchi", "Coleslaw", "Pickled Cabbage"],
      answer: "Kimchi"
    },
    {
      question: "What sauce is used in a traditional Eggs Benedict dish?",
      options: ["Bearnaise", "Alfredo", "Hollandaise", "Bechamel"],
      answer: "Hollandaise"
    },
    {
      question: "What type of nut is added to chocolate to make Nutella?",
      options: ["Almonds", "Peanuts", "Walnuts", "Hazelnuts"],
      answer: "Hazelnuts"
    },
    {
    question: "What type of cheese is traditionally used in making Tiramisu?",
    options: ["Ricotta", "Parmesan", "Mascarpone", "Cream Cheese"],
    answer: "Mascarpone"
     },
    
  ];





const quizContainer = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#question');
const optionsElement = document.querySelector('.options-container');
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

const loadQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    optionOne.innerText = currentQuestion.options[0];
    optionTwo.innerText = currentQuestion.options[1];
    optionThree.innerText = currentQuestion.options[2];
    optionFour.innerText = currentQuestion.options[3];

    resultElement.innerText = "";

    // const options = [optionOne, optionTwo, optionThree, optionFour];

    // options.forEach(option => {
    //     option.addEventListener('click', () => checkAnswer(option.innerText));
    // });
    resetOptions();

    optionOne.addEventListener('click',() => handleClick(optionOne.innerText));
    optionTwo.addEventListener('click', () => handleClick(optionTwo.innerText));
    optionThree.addEventListener('click', () => handleClick(optionThree.innerText));
    optionFour.addEventListener('click', () => handleClick(optionFour.innerText));

    nextButton.style.display = "none";
    }

const handleClick = (selectedOption) => {
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

    const newQuestion = () => {
        currentQuestionIndex++;
    
        if(currentQuestionIndex < quizData.length) {
            loadQuestion();
        }   else {
            showResult();
        }
    };
    
    
    const showResult = () => {
        questionElement.innerText = "Quiz Completed!";
        optionsElement.style.display = "none";

        nextButton.innerText = "Try Again!"
        nextButton.style.display = "inline-block";

        nextButton.removeEventListener('click', newQuestion);
        nextButton.addEventListener('click', () => {
            score = 0;
            currentQuestionIndex = 0;
            totalScore.innerText = score;
        
            optionsElement.style.display = "block";
            nextButton.innerText = "Next";
            nextButton.style.display = "none";

            loadQuestion();
        });
    };

    const resetOptions = () => {
        optionOne.removeEventListener('click', handleClick);
        optionTwo.removeEventListener('click', handleClick);
        optionThree.removeEventListener('click', handleClick);
        optionFour.removeEventListener('click', handleClick);
    };


startButton.addEventListener('click', () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

nextButton.addEventListener('click', newQuestion);









