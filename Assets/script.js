//Variables and html
var headerEl = document.querySelector(".h1Tag");
var question = document.querySelector(".questions");
var startbtnEL = document.querySelector(".Start");
var timerEl = document.querySelector(".time");

var answers = document.querySelector(".answers");
var option1El = document.querySelector(".eoption1");
var option2El = document.querySelector(".eoption2");
var option3El = document.querySelector(".eoption3");
var option4El = document.querySelector(".eoption4");
var showAnswerEl = document.querySelector(".showAnswer");

var highScoreEl = document.querySelector(".highscores");
var submitGameEl = document.querySelector(".submitGameScore");
var intialsEl = document.querySelector(".intials");
// qustions array created
var qandA = [ 
  {//1
    Question:"What is a string",
    
  
  

    option1:"is used to represent and manipulate a sequence of characters.",
    option2:" a list of integers",
    option3:"a boolean that returns true or false",
    option4:"a button for submitting form data",

    answer:"is used to represent and manipulate a sequence of characters."
  },
  {//2
    Question:"What does CSS stand for",

    option1:"Color style sheet",
    option2:"creating style sheet",
    option3:"Creative sheet style",
    option4:"cascading stylesheets",

    answer:"cascading stylesheets"
  },
  {//3
    Question:"What is an Array",

    option1:"is a sequence of characters.",
    option2:" a button for submitting form dat",
    option3:"is a global object that is used in the construction of arrays; which are high-level, list-like objects.",
    option4:"a list of numbers",

    answer:"is a global object that is used in the construction of arrays; which are high-level, list-like objects."
  },
  {//4
    Question:"Which built-in method combines the text of two strings and returns a new string?",

    option1:"Append()",
    option2:"Concat()",
    option3:"Combine()",
    option4:"Attach()",

    answer:"Concat()"
  },
  {//5
    Question:"Which built-in method sorts the elements of an array?",

    option1:"sort()",
    option2:"order()",
    option3:"attach(order)",
    option4:"organize()",

    answer:"sort()"
  },
  {//6
    Question:"How do you call a function?",

    option1:"call myfunctiom",
    option2:"myfuntion.activate",
    option3:"activate(myfunction)",
    option4:"myfunction()",

    answer:"myfunction()"
  },
  {//7 /// From here need answers
    Question:"How to write an IF statement in JavaScript??",

    option1:"if(i== 5)",
    option2:"if i = 5",
    option3:"if i(=5)",
    option4:"if() i =5 ",

    answer:"option1"
  },
  {//8
    Question:"How to write an IF statement for executing some code if i is NOT equal to 5?",

    option1:"if is not = 5",
    option2:"if() not = 5",
    option3:"if(i != 5)",
    option4:"if(!=)5",

    answer:"if(i== 5)"
  },
  {//9
    Question:"Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",

    option1:"sort()",
    option2:"order()",
    option3:"anchor()",
    option4:"organize()",

    answer:"anchor()"
  }, 
  {//10
    Question:"How do you create comments in javascript?",

    option1:"comments()words",
    option2:"-m(words)",
    option3:"(comment)words",
    option4:"//words",

    answer:"//words"
  },];

//create a tab for View High Scores That keep a list of Initials and highscores
var quizQuestions = [];
var score = "";
var clock = 60;
//Page settings at start
timerEl.textContent = clock;
answers.style.display = "none";
highScoreEl.style.display = "none";


//Create a timer that counts down from 60 seconds
function addquizQuestions() {
  quizQuestions.push(qandA.sort(() => Math.random() - 0.5));
} addquizQuestions();

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      clock--;
      timerEl.textContent = "Timer: " + clock;
  
      if(clock == 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        gameover();
        
     
      }
  
    }, 1000);
  } 


//creat an object that keeps questions and answers-//**lets them know if there wrong or right */



  ///displaying the questions
function displayQ(object){
  
    answers.style.display = "inline-block";

    question.textContent = object[0][0].Question;
    option1El.textContent = object[0][0].option1;
    option2El.textContent = object[0][0].option2;
    option3El.textContent = object[0][0].option3;
    option4El.textContent = object[0][0].option4;

}
//deducting 10seconds for wrong answers
function timerWrongOption() {
  if (clock >= 10) {
      clock = clock - 10
  } 
  timerEl.textContent = clock;
  showAnswerEl.textContent = "Wrong Answer";

}
function nextQ() {
  var removed = quizQuestions[0].splice(0, 1);

  if (quizQuestions[0].length === 0 || clock === 0) {
      
      answers.style.display = "none";
      
      gameover();
  } else {
      displayQ(quizQuestions);
  }
}
//end message of the game
function gameover() {
  timerEl.textContent = "out";
  answers.style.display = "none";
  highScoreEl.style.display = "inline";
  headerEl.textContent = "Game Over";
  showAnswerEl.style.display="none";

  if (score >= 0) {
      question.innerHTML = "Well done! Your scored" +  score/10
          + "! Please enter your intials below to save";
 
}
}

// activating events
startbtnEL.addEventListener("click", function () {
 // title.textContent = "";
  startbtnEL.style.display = "none";
  setTime();
  displayQ(quizQuestions);
});

option1El.addEventListener("click", function () {
  if (option1El.textContent === quizQuestions[0][0].answer) {
      showAnswerEl.textContent = "That is Correct!"
     score = score + 1;
      nextQ();
      
  }
  else {
      timerWrongOption();
      nextQ();

  }
})


option2El.addEventListener("click", function () {
  if (option2El.textContent === quizQuestions[0][0].answer) {
      showAnswerEl.textContent = "That is Correct!"
      score = score + 1;
      nextQ();
      

  }
  else {
      timerWrongOption();
      nextQ();

  }
})

option3El.addEventListener("click", function () {
  if (option3El.textContent === quizQuestions[0][0].answer) {
      showAnswerEl.textContent = "That is Correct!"
      score = score + 1;
      nextQ();
      

  }
  else {
      timerWrongOption();
      nextQ();

  }
})

option4El.addEventListener("click", function () {
  if (option4El.textContent === quizQuestions[0][0].answer) {
      showAnswerEl.textContent = "That is Correct!"
      score = score + 1;
      nextQ();

  }
  else {
      timerWrongOption();
      nextQ();

  }
})

//To save score 
submitGameEl.addEventListener("click", function () {

  var getName = localStorage.getItem("array");

  if (score < 10 && score > 0) {
      score = "0" + score;
  }

  var userScore = [" " + score + "-" + intialsEl.value + " "]
  var newArray = [];

  if (getName !== null) {
      newArray.push(getName);
  }

  newArray.push(userScore);

  localStorage.setItem("array", newArray);
  intialsEl.value = " ";
})




//Ones the game is over it ask for your intial in a textbox:the ouline of the box ligtens UP
// and adds your score to the highscore


//Displays : All done- has a sumbit button and* asks for intials in a text box;
// Has a clear highscores button, and a go back button- takes you back to the
//**Home screen where you can start the cod quiz */

// The buttons lighten up when you ::hover over them** So do the answers: 
//buttons and answers are a dark purple:"" Code Quiz Challenge"

