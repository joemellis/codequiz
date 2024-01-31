const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High-level Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Which programming language is known for its asynchronous nature?",
        options: ["JavaScript", "Java", "Python"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of CSS?",
        options: ["To define the structure of a web page", "To style the visual presentation of a web page", "To handle server-side operations"],
        correctAnswer: 1
    },
   
    {
        question: "In which year was JavaScript created?",
        options: ["1995", "2005", "2010"],
        correctAnswer: 0
    },
    {
        question: "What is the main purpose of a 'for' loop in programming?",
        options: ["Declaring variables", "Conditional branching", "Repeating a block of code"],
        correctAnswer: 2
    },
    // ... and so on for the remaining questions
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    } else {
        alert(`Wrong answer! The correct answer is: ${currentQuestion.options[currentQuestion.correctAnswer]}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = `Your score: ${score}`;
}
