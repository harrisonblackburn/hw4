// Add a 'click' to start button to allow user to start the quiz 
// When the user 'clicks' the start button, then time interval begins
// user is presented with first multiple-choice question 
// create first answer choice, add user 'click' option
// create second answer choice, add user 'click' option 
// create third answer choice, add user 'click' option 
// create fourth answer choice, add user 'click' option 
// add conditional statement to evaluate if answer is correct
// if answer is incorrect, decrement time interval

// put in 'onclick' button to start time interval when user 'clicks' "start quiz"

var start = document.getElementById("startQuiz"); 
var quiz = document.getElementById("quiz"); 
var question = document.getElementById("question");
var timer = document.getElementById("timer"); 
var choiceA = document.getElementById("A"); 
var choiceB = document.getElementById("B"); 
var choiceC = document.getElementById("C"); 
var choiceD = document.getElementById("D");
var highScores = document.getElementById("highscores");

let questions = [
    {
    question : "Commonly used data types DO NOT include:",
    choiceA : "Strings", 
    choiceB : "Booleans",
    choiceC : "Alerts",
    choiceD : "Numbers",
    correctAnswer: "C"
},
    {
     question: "The condition in an if/else statement is enclosed within:",
     choiceA : "Quotes", 
     choiceB : "Curly Brackets",
     choiceC : "Parentheses",
     choiceD : "Square Brackets",
     correctAnswer : "B"
}, 
    {
      question : "Arrays in JavaScript can be used to store:",
      choiceA : "Numbers and Strings",
      choiceB : "other arrays", 
      choiceC : "Booleans", 
      choiceD : "all of the above", 
      correctAnswer : "D"   

}, 
    {
      question : "String values must be enclosed within ____ when being assigned to variables",
      choiceA : "Commas",
      choiceB : "Curly Brackets",
      choiceC : "Quotes", 
      choiceD :  "Parentheses",
      correctAnswer : "C"

}]

// creating function to display the question to the user
function displayQuestion(){
    question.textContent = questions[0].question;
    choiceA.textContent = questions[0].choiceA;
    
// we need to reference a specific value within the object within the array
// append value to DOM reference 
console.log(questions[0])
}



start.addEventListener('click', function(){
    this.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
} )
