var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ");
console.log('Welcome ' + userName);
console.log("Lets play: 'Do you know Gulz?' ");
var score=0;

//play function
function play(q, a){
  var userAnswer = readlineSync.question(q);
  if(userAnswer === a){
    console.log("You're right!")
    score = score + 1;
  }
  else{
    console.log('Wrong!');
  }
console.log('your current score is: ' + score)
console.log('----------')
}


//array of objects
var questions = [{question : "What is Gulz's hometown? " , 
answer : 'Koraput'},{question : "What is Gulz's first name?(exact spelling) ", answer : 'Mohammed'},{question : "Is he a dog person or a cat person? " , answer : 'cat person'},{question : "Does he like sweets?(yes/no) " , answer : 'yes'}];

//loop
for(var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log('YAY!!! You scored: ' + score);

if(score >= 3){
  console.log('OMG!! your score is one of the highest scores\nDM me to display your name in high scores list!')
}
console.log('\nHIGH SCORES: ');
console.log("Gulz::4\nAmit::3");