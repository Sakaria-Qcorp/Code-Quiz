//create a tab for View High Scores That keep a list of Initials and highscores




//Create a timer that counts down from 60 seconds
var clock = 60;
var timerEl = document.querySelector(".timer");
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      clock--;
      timerEl.textContent =  "Timer: " + clock;
  
      if(clock === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
     alert("game OVer")
      }
  
    }, 1000);
  }

setTime();
//creat an object that keeps questions and answers-//**lets them know if there wrong or right */


//Ones the game is over it ask for your intial in a textbox:the ouline of the box ligtens UP
// and adds your score to the highscore


//Displays : All done- has a sumbit button and* asks for intials in a text box;
// Has a clear highscores button, and a go back button- takes you back to the
//**Home screen where you can start the cod quiz */

// The buttons lighten up when you ::hover over them** So do the answers: 
//buttons and answers are a dark purple:"" Code Quiz Challenge"

