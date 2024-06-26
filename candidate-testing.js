const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let questions = ["Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride",
 "true",
"40", 
"Trajectory", 
"3" 
];

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
question = "Who was the first American woman in space? ";
let correctAnswer;
correctAnswer = ("Sally Ride");
let candidateAnswer;
candidateAnswer = "";


//TODO: Variables for Part 2
let candidateAnswers;
candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name: ' );
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
  candidateAnswers[i] = input.question(questions[i]);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let numberOfCorrectAnswers = 0;
for (let i = 0; i < questions.length; i++){
  console.log(`Question${i+1}: ${questions[i]}`)
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]} `);
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    console.log(`${candidateName}, You are correct!`)
    numberOfCorrectAnswers++
    }else {
    console.log(`${candidateName}, Sorry, better luck next time!`);
    }
}


  let grade = (numberOfCorrectAnswers/questions.length)*100;  //TODO 3.2 use this variable to calculate the candidates score.
  console.log (`${candidateName}, your grade is ${grade}%!`)
if (grade >= 80) {
  console.log(`Congratulations ${candidateName}, You have passed the quiz!`);
} else {
  console.log (`Sorry ${candidateName}, You have failed the test. Better luck next time!`)
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`${candidateName}, We welcome you to the club`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};