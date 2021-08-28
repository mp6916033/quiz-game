const quizData = [
    {
        question: "Which day is celebrated as International Women’s Day?",
        a: " 8 March",
        b: "23 February",
        c: "10 April",
        d: "1 January",
        correct: "a",
    },
    {
         question: "Which day is celebrated as World Press Freedom Day ?",
        a: "1 May",
        b: "2 May",
        c: "3 May",
        d: "4 May",
        correct: "c",
    },
    {
        question: "Which day is celebrated as World Environment Day?",
        a: "5 June",
        b: "5 July",
        c: "5 August",
        d: "5 December",
        correct: "a",
    },
    {
        question: "Which day is celebrated as International Literacy Day ?",
        a: "9 June",
        b: "8 July",
        c: "4 August",
        d: "8 September",
        correct: "d",
    },
    {
        question: "Which day is celebrated as United Nations Day?",
        a: "29 June",
        b: "18 July",
        c: "4 January",
        d: "24 October",
        correct: "d",
    },
  

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("Next");

let currentQuiz = 0;
let score = 0;

takeQuiz();

function takeQuiz() {
    againAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer =unescape;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function againAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score+=1;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            takeQuiz();
        } else {
            quiz.innerHTML = `
                <h1>Your score is ${score}/${quizData.length} questions.</h1>
                
                <button onclick="location.reload()">Try &nbsp  Again</button>
            `;
        }
    }
});