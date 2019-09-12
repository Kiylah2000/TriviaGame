//Counter
let counter = 15;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;
let question_arr = [];
let answers_arr = [];

const quizQuestions = [
    {
        question: " Whose refusal to give up her seat on a public bus sparked a boycott of Montgomerey, AL buses from 1955-1956?",
        answers: ["Sojourner Truth", "Mary Mcleod Bethune", "Rosa Parks"],
        correctAnswer: "Rosa Parks"
    },

    {
        question: "What is the name of Beyonce's 3 kids?",
        answers: ["Blue Ivey, Sir, Rumi", "Stormi, Kendall, Kylie", "Kim, Chloe, Courtney"],
        correctAnswer: "Blue Ivey, Sir, Rumi"
    },

    {
        question: "Who was the 1st African American president?",
        answers: ["Jackie Robinson", "Barack OBama", "Jay-Z"],
        correctAnswer: "Barack OBama"
    },

    {
        question: "Michael Jordan has a sneaker named after him",
        answers: ["True", "False"],
        correctAnswer: "True"
    },

    {
        question: "Who is the first woman gymnast to win World All-Around titles three consecutive times?",
        answers: ["Simone Biles", "Gabby Douglas", "Mary Lou Retton"],
        correctAnswer: "Simone Biles"
    },

    {
        question: "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?",
        answers: ["Toni Morrison", "Nikki Giovanni", "Maya Angelo"],
        correctAnswer: "Maya Angelo"
    },

    {
        question: "Who gave the 'I Have a Dream' speech at The March on Washington in 1963?",
        answers: ["Gandhi", "Martin Luther King Jr.", "James Harden"],
        correctAnswer: "Martin Luther King Jr."
    }

];

const funImages = [
    "./Assets/Images/giphy2.gif",
    "./Assets/Images/giphy3.gif",
    "./Assets/Images/giphy8.gif",
];

const sadImages = [
    "./Assets/Images/giphy5.gif",
    "./Assets/Images/giphy7.gif",
];

// If the timer is over, go to the next question

function nextQuestion() {

    const isQuestionOvere = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOvere) {
        console.log("Game is over");
        displayResults();

    }
    else {
        currentQuestion++;
        loadQuestion();
    }


}

//  Start the timer

function timeUp() {
    clearInterval(timer);
    lost++;
    preloadImage("lost");
    setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
    counter--;
    $("#timer").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
}

//Display the questions and answers

function loadQuestion() {
    counter = 15;

    timer = setInterval(countDown, 1000);
    question_arr = quizQuestions[currentQuestion].question;
    answers_arr = quizQuestions[currentQuestion].answers;

    $("#timer").html("Timer: " + counter);
    $("#game").html(`<h4>${question_arr}<h4>
    ${loadAnswers(answers_arr)}
    ${loadRemainingQuestions()}
    `);
}

function loadAnswers() {
    let result = "";

    for (let i = 0; i < answers_arr.length; i++) {
        result += `<p class= "answers" data-answer="${answers_arr[i]}">${answers_arr[i]}</p>`;
    }
    return result;
}

// Go to next question when the answer selected is correct or wrong

$(document).on("click", ".answers", function () {
    clearInterval(timer);
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        preloadImage("win");
        setTimeout(nextQuestion, 3 * 1000);
        console.log("You Won");

    }
    else {
        lost++;
        preloadImage("lost");
        setTimeout(nextQuestion, 3 * 1000);
        console.log("You Lost");
    }
    console.log("Its working: ", selectedAnswer);
});

function displayResults() {
    const result = `
    <p>You got ${score} question(s) correct</p>
    <p>You got ${lost} question(s) wrong</p>
    <p>Total questions answered: ${quizQuestions.length}</p>
    <button id="reset">Reset Game</button>
    `;
    $("#game").html(result);
}

$(document).on("click", "#reset", function () {
    counter = 15;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();
});

function loadRemainingQuestions() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Questions: ${remainingQuestion}/${totalQuestion}`;
}


function randomImage(images) {
const random = Math.floor(Math.random() * images.length);
const randomImage = images[random];
return randomImage;
}



//Display Images

function preloadImage(status) {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (status === "win") {
        $("#game").html(`
            <p class="preload-image">You are correct!!!!</p>
            <img src="${randomImage(funImages)}"/>
        `);
    }
        else {
        $("#game").html(`
            <p class="preload-image">Nope, not correct</P>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></P>
            <img src="${randomImage(sadImages)}"/>
        `);
    }

}


$("#start").click(function() {
    $("#start").remove();
    $("#timer").html(counter);
    loadQuestion();
});