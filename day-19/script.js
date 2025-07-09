// Questions ka array banaya jahan question, options aur correct answer rakhe
const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: "4"
  },
  {
    question: "Which language is used to style web pages?",
    answers: ["JavaScript", "HTML", "CSS"],
    correct: "CSS"
  },
  {
    question: "Which tag is used for headings in HTML?",
    answers: ["<head>", "<h1>", "<p>"],
    correct: "<h1>"
  }
];

// Start ma question number 0 se hoga aur score 0 se
let index = 0;
let score = 0;

// Sab HTML elements ko JS ma laya
const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const nextBtn = document.getElementById("next");
const scoreBox = document.getElementById("scoreBox");

// Ye function current question aur options screen pe show karta hai
function showQuestion() {
  let q = questions[index];
  questionEl.textContent = q.question;
  btn1.textContent = q.answers[0];
  btn2.textContent = q.answers[1];
  btn3.textContent = q.answers[2];
}

// Jab user kisi option pe click kare, ye check karega sahi hai ya nahi
function checkAnswer(e) {
  if (e.target.textContent === questions[index].correct) {
    score++; // agar sahi hai to score barh jaye
  }

  // Teeno buttons disable karde taake dobara click na ho
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
}

// Har button ke click pe answer check karne wala function lagaya
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);

// Next button click hote hi agla question show hoga
nextBtn.addEventListener("click", () => {
  index++; // question index barhao

  // Agar questions abhi baqi hain to next question show karo
  if (index < questions.length) {
    // Buttons ko wapas enable karo
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;

    // Agla question screen pe lao
    showQuestion();
  } else {
    // Agar saare questions complete ho gaye
    questionEl.textContent = "Quiz Completed!";
    
    // Buttons aur next button hatado
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    nextBtn.style.display = "none";

    // Final score show karo
    scoreBox.textContent = `Your score: ${score} / ${questions.length}`;
  }
});

// Page load hote hi pehla question show karo
showQuestion();
