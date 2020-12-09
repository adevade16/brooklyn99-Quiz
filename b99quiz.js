//installing libraries
var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

console.log(chalk.bold.greenBright.bgGrey('Welcome to Brooklyn 99 Quiz '))

var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + (" Are you ready for the quiz?"));

//asking the user whether he wants to play the game
if (readlineSync.keyInYN('Do you want to continue?')) 
{
  
  console.log(chalk.greenBright("Okay let's begin"));

  //creating a function
    function quiz(question, answer) {
      var userAnswer = readlineSync.question(question);

      if (userAnswer.toUpperCase() === answer.toUpperCase()) 
      { // branching
      console.log(chalk.greenBright("You are right!"));
      score = score + 1;
      
      }
      else {
      console.log(chalk.redBright("You are wrong!"));
    
    }

    console.log("Current score is: ",score);
  }

  //creating an object of question and answers inside array 
  var questions =[
    {
      question:
      `What is Terry favourite food? 
      A.Cheese
      B.Milk
      C.Yoghurt \n`,
      answer: "C"
    },
    {
      question:
      `Who was dating Rosa in S2? 
      A.Matt
      B.Marcus
      C.Matthew \n`,
      answer: "B"
    },
    {
      question:
      `Which actor portrayed the role of Doug Judy?
      A.Dirk Blocker
      B.Bradley Whitford
      C.Stephen Root \n`,
      answer: "B"
    },
    {
      question:
      `Who was the new captain of the precinct in S3? 
      A.Captain Seth Dozerman
      B.Captain John Holmes
      C.Captain Raymond Holt \n`,
      answer:"A"
    },
    {
      question:
      `In S3 "New Captain" what was the department's mascot was ?
      A.Rat
      B.Mouse
      C.Pigeon \n`,
      answer: "C"
    }
  ]

  //for loop to access every question from array
  for(i=0 ; i<questions.length ; i++)
  {
    quiz(questions[i].question, questions[i].answer)//
  }
  console.log("-----------------------")
  console.log("AMAZING! Your Final Score is: ",score)
  
} else 
{
  //'N' key was pressed.
  console.log('BYE! See you later');

}


