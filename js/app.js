
const quizData = [
    {
    question: "What cabbage dish is a staple in Korean cuisine?",
    options: ["Sauerkraut", "Kimchi", "Coleslaw", "Bulgogi"],
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
    {
    question: "In what country did the Caesar salad originate?",
    options: ["Greece", "Italy", "Spain", "Mexico"],
    answer: "Mexico"
    },
    {
    question: "What country's national dish is Ceviche?",
    options: ["Brazil", "Peru", "Spain", "Mexico"],
    answer: "Peru"
    },
    {
    question: "What is the national dish of Scotland?",
    options: ["Haggis", "Black Pudding", "Fish n' Chips", "Scotch Pie"],
    answer: "Haggis"
    },
    {
    question: "Which cheese is made from the whey of sheep or cow's milk cheese?",
    options: ["Parmesan", "Pecorino", "Gorgonzola", "Ricotta"],
    answer: "Ricotta"
    },
    {
    question: "What type of nut is used to make marzipan?",
    options: ["Almonds", "Pecans", "Walnuts", "Hazelnuts"],
    answer: "Almonds"
    },
    {
    question: "What is the main ingredient in the Greek aperitif, Ouzo?",
    options: ["Cinnamon", "Mint", "Anise", "Cloves"],
    answer: "Anise"
    },
    {
    question: "What type of fish is used in the Nordic dish, Gravlax?",
    options: ["Herring", "Mackeral", "Trout", "Salmon"],
    answer: "Salmon"
    },
    {
    question: "What is the name of the French dish made with meat and white beans?",
    options: ["Cassoulet", "Ratatouille", "Coq au Vin", "Bouillabaisse"],
    answer: "Cassoulet"
    },
    {
    question: "Which fruit is also known as the Chinese gooseberry?",
    options: ["Kiwi", "Lychee", "Dragon Fruit", "Starfruit"],
    answer: "Kiwi"
    },
    {
    question: "What is the national dish of Hungary?",
    options: ["Paprikash", "Langos", "Goulash", "Halaszle"],
    answer: "Goulash"
    },
    {
    question: "What type of tea is traditionally used in a Japanese tea ceremony?",
    options: ["Oolong", "Sencha", "Jasmine", "Matcha"],
    answer: "Matcha"
    },
    {
    question: "In which Italian city did Tiramisu originate?",
    options: ["Treviso", "Florence", "Milan", "Rome"],
    answer: "Treviso"
    },
    {
    question: "Which fruit is the primary ingredient in the French dessert Tarte Tatin?",
    options: ["Pear", "Peach", "Apple", "Cherry"],
    answer: "Apple"
    },
    {
    question: "What is the main ingredient in the Japanese dish Natto?",
    options: ["Rice", "Soybeans", "Seaweed", "Fish"],
    answer: "Soybeans"
    },
    {
    question: "What is the main ingredient of the Greek dish Taramasalata?",
    options: ["Chickpeas", "Yogurt", "Cucumber", "Fish Eggs"],
    answer: "Fish Eggs"
    },
    {
    question: "What type of baked good is a Berliner?",
    options: ["Pretzel", "Apple Strudel", "Jelly Doughnut", "Cinnamon Roll"],
    answer: "Jelly Doughnut"
    },
    {
    question: "Which country is the largest producer of Saffron?",
    options: ["Iran", "Morocco", "Spain", "India"],
    answer: "Iran"
    } 
  ];


const quizContainer = document.querySelector('#quiz-container');
const questionElement = document.querySelector('#question');
const optionsElement = document.querySelector('.options-container');
const startButton = document.querySelector('#start');
const startScreen = document.querySelector('#start-screen');
const totalScore = document.querySelector('#score');
const resultElement = document.querySelector('#result');
const nextButton = document.querySelector('#next-button');

const chickenAlarm = new Audio('assets/chicken-alarm.mp3');
const gameStart = new Audio('assets/game-start.mp3')
const nextQuestion = new Audio('assets/next-question.mp3');

let score = 0;
let currentQuestionIndex = 0;



const loadQuestion = () => {
    optionsElement.innerHTML = "";
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    const optionOne = document.createElement('button');
    const optionTwo = document.createElement('button');
    const optionThree = document.createElement('button');
    const optionFour = document.createElement('button');

    optionOne.setAttribute("id", "option-one");
    optionTwo.setAttribute("id", "option-two");
    optionThree.setAttribute("id", "option-three");
    optionFour.setAttribute("id", "option-four");

    optionsElement.appendChild(optionOne);
    optionsElement.appendChild(optionTwo);
    optionsElement.appendChild(optionThree);
    optionsElement.appendChild(optionFour);

    optionOne.innerText = currentQuestion.options[0];
    optionTwo.innerText = currentQuestion.options[1];
    optionThree.innerText = currentQuestion.options[2];
    optionFour.innerText = currentQuestion.options[3];

    resultElement.innerText = "";
    

    optionOne.addEventListener('click',() => handleClick(optionOne.innerText, event));
    optionTwo.addEventListener('click', () => handleClick(optionTwo.innerText, event));
    optionThree.addEventListener('click', () => handleClick(optionThree.innerText, event));
    optionFour.addEventListener('click', () => handleClick(optionFour.innerText, event));

    nextButton.style.display = "none";
};


const handleClick = (selectedOption, event) => {
        const currentQuestion = quizData[currentQuestionIndex];
        
        if (selectedOption === currentQuestion.answer) {
            score = score + 100;
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Incorrect!";
        }
        totalScore.innerText = score;
        nextButton.style.display = "inline-block";

        event.target.disabled = true;
};


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
        if(totalScore.innerText >= 1000) {
            questionElement.innerText = "Winner Winner Chicken Dinner!";
        }
        if(totalScore.innerText < 1000) {
            questionElement.innerText = "You Lost! Try Again?";
        }
        resultElement.innerText = "Don't be a Chicken! Try to get a perfect score!";
        optionsElement.style.display = "none";

        nextButton.innerText = "Try Again!"
        nextButton.style.display = "inline-block";

        nextButton.removeEventListener('click', newQuestion);
        nextButton.addEventListener('click', resetGame);
    };


    let isImageAdded = false;

    const resetGame = () => {
            score = 0;
            currentQuestionIndex = 0;
            totalScore.innerText = score;

            nextButton.innerText = "Next";
            quizContainer.style.display = "none";
            startScreen.style.display = "flex";
            optionsElement.style.display = "flex";

            nextButton.style.display = "none";
            startButton.disabled = false;

            nextButton.removeEventListener('click', resetGame);
            nextButton.addEventListener('click', newQuestion);
            
            if (!isImageAdded) {
                const image = document.createElement("img");
                image.src="assets/chickenYES.png";
                image.alt="Cartoon rooster with exaggerated thumbs up";
                image.classList.add("winning-chicken");
                document.body.appendChild(image);
        
            isImageAdded = true;
            }
            if (currentImage) {
                currentImage.remove();
            }   
               
    };
    

    startButton.addEventListener('click', () => {
        startScreen.style.display = "none";
        quizContainer.style.display = "block";
        startButton.disabled = true;
        loadQuestion(); 
    });

    nextButton.addEventListener('click', newQuestion);

    nextButton.addEventListener('click', (evt) => {
        nextQuestion.volume = .25
        nextQuestion.play()
    });

    startButton.addEventListener('click', (evt) => {
        chickenAlarm.volume = .25
        chickenAlarm.play()
    });





    
