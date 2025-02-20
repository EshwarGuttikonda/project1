// Shared quiz data
const quizData = [
  {
      question: "What animal is the symbol of China?",
      options: ["Giant Salamander", "Dragon", "Giant Panda", "Golden Monkey"],
      answer: "Giant Panda"
  },
  {
      question: "What chemical element is used in the manufacture of batteries?",
      options: ["Copper", "Lithium", "Manganese", "Zinc"],
      answer: "Lithium"
  },
  {
      question: "Which country is famous for its pyramids?",
      options: ["India", "Australia", "Egypt", "Brazil"],
      answer: "Egypt"
  },
  {
      question: "How many players are there on each side of the Basketball game?",
      options: ["3", "1", "4", "5"],
      answer: "5"
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load the quiz question
function loadQuestion() {
  if (currentQuestionIndex < quizData.length) {
      const currentQuestion = quizData[currentQuestionIndex];
      const quizElement = document.getElementById("quiz");
      quizElement.innerHTML = `
          <div class="question">${currentQuestion.question}</div>
          <div class="options">
              ${currentQuestion.options.map((option, index) => `
                  <div class="option" onclick="selectOption('${option}')">${option}</div>
              `).join('')}
          </div>
      `;
  } else {
      showResult();
  }
}

let selectedAnswer = '';

function selectOption(answer) {
  selectedAnswer = answer;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.style.backgroundColor = '');
  event.target.style.backgroundColor = '#d3f8e2';
}

document.getElementById("submit-btn").addEventListener('click', function() {
  if (selectedAnswer) {
      const correctAnswer = quizData[currentQuestionIndex].answer;
      if (selectedAnswer === correctAnswer) {
          score++;
      }
  }
  
  currentQuestionIndex++;
  selectedAnswer = '';
  loadQuestion();
});

function showResult() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Score: ${score} out of ${quizData.length}`;
  document.getElementById("submit-btn").style.display = 'none';
}

// Load the first question when the quiz page is loaded
if (document.getElementById("quiz")) {
  loadQuestion();
}
