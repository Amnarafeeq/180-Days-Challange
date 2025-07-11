// questions ka array banaya jahan question, options aur correct answer rakhe
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

// start ma question number 0 se hoga aur score 0 se
let index = 0;
let score = 0;

// sab html elements ko js ma get kiya
const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const nextBtn = document.getElementById("next");
const scoreBox = document.getElementById("scoreBox");

// current question aur options screen pe dikhata hai
const showQuestion = () => {
  const { question, answers } = questions[index];
  questionEl.textContent = question;
  [btn1.textContent, btn2.textContent, btn3.textContent] = [...answers];
};

// jab user answer select kare to sahi/galat check hota hai
const checkAnswer = (e) => {
  const selected = e.target.textContent;
  const { correct } = questions[index];

  if (selected === correct) score++;

  // teeno buttons disable kardein
  [btn1, btn2, btn3].forEach(btn => btn.disabled = true);
};

// har button ke click pe answer check karna
[btn1, btn2, btn3].forEach(btn =>
  btn.addEventListener("click", checkAnswer)
);

// next button click pe next question ya score show karna
nextBtn.addEventListener("click", () => {
  index++;

  if (index < questions.length) {
    // buttons wapas enable karo
    [btn1, btn2, btn3].forEach(btn => btn.disabled = false);
    showQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    
    // buttons aur next button chhupa do
    [btn1, btn2, btn3, nextBtn].forEach(btn => btn.style.display = "none");

    // template literal se score dikhana
    scoreBox.textContent = `✅ Your score: ${score} / ${questions.length}`;
  }
});

// page load par pehla question show karo
showQuestion();
