const questions = [
    {
        question: "She ___ to school every day.",
        answers: ["go", "goes", "going"],
        correct: "goes"
    },
    {
        question: "They ___ football on Sundays.",
        answers: ["play", "plays", "playing"],
        correct: "play"
    },
    {
        question: "He ___ English very well.",
        answers: ["speak", "speaks", "speaking"],
        correct: "speaks"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let buttons = "";

    q.answers.forEach(answer => {
        buttons += `<button onclick="checkAnswer('${answer}')">${answer}</button>`;
    });

    document.getElementById("answers").innerHTML = buttons;
}


function checkAnswer(answer) {

    let correct = questions[currentQuestion].correct;

    if(answer === correct){
        score++;
        alert("Correct! ✅");
    } else {
        alert("Try again ❌");
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    } else {
        document.getElementById("game").innerHTML =
        "Game finished! Your score: " + score + "/" + questions.length;
    }
}


loadQuestion();
