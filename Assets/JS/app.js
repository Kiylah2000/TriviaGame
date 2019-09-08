//Counter
let counter = 60;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;




const quizQuestions = [
    {
        question: " Whose refusal to give up her seat on a public bus sparked a boycott of Montgomerey, AL buses from 1955-1956?",
        answers: ["Sojourner Truth","Mary Mcleod Bethune","Rosa Parks"],
        correctAnswer: "Rosa Parks"
    },

    {
        question: "What is the name of Beyonce's 3 kids?",
        answers: ["Blue Ivey, Sir, Rumi","Stormi, Kendall, Kylie","Kim, Chloe, Courtney"],
        correctAnswer: "Blue Ivey, Sir, Rumi"
    },

    {
        question: "Who was the 1st African American president?",
        answers: ["Jackie Robinson","Barack OBama","Jay-Z"],
        correctAnswer: "Barack OBama"
    },

    {
        question: "Michael Jordan has a sneaker named after him",
        answers: ["True","False"],
        correctAnswer: "True"
    },

    {
        question: "Who is the first woman gymnast to win World All-Around titles three consecutive times?",
        answers: ["Simone Biles","Gabby Douglas","Mary Lou Retton"],
        correctAnswer: "Simone Biles"
    },

    {
        question: "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?",
        answers: ["Toni Morrison","Nikki Giovanni","Maya Angelo"],
        correctAnswer: "Maya Angelo"
    },

    {
        question: "Who gave the 'I Have a Dream' speech at The March on Washington in 1963?",
        answers: ["Gandhi","Martin Luther King Jr.","James Harden"],
        correctAnswer: "Martin Luther King Jr."
    }
  
];

console.log (quizQuestions.answers);

//Display the questions and answers

function loadQuestion() {
    const question = quizQuestions[currentQuestion].question;
    const answers = quizQuestions[currentQuestion].answers;

    $("#timer").html("Timer: " + counter);
    $("#game").html(`<h4>${question}<h4>
    ${loadAnswers(answers)}
    `);
}

function loadAnswers() {
    let result = "";

    for (let i = 0; i < answers.length; i++) {
        result += `<p class= "answers" data-answer="${answers[i]}">${answers[i]}</p>`;
    }
    return result;
}

loadQuestion();