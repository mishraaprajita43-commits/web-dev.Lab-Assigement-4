// Array of quiz questions
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the full form of HTML?", answer: "hypertext markup language" },
    { question: "Which gas do plants release during photosynthesis?", answer: "oxygen" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;  // Track user score

    for (let i = 0; i < quizQuestions.length; i++) {
        // Ask the question
        let userAnswer = prompt(quizQuestions[i].question);

        // If user cancels prompt
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check the answer
        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Show final score
    alert("Quiz finished!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();