const myProblem = document.getElementById('problem');
//var button = document.getElementById('submitButton');
const myAnswer = document.getElementById('answerChecker');
const myScore = document.getElementById('score');
const myFeedback = document.getElementById('feedback');
var theScore = 0;
var level2Answer = "";
var level3Answer = "";
var level4Answer = "";

  myGoodSounds = [ 'goodAudio1', 'goodAudio2', 'goodAudio3', 'goodAudio4', 'goodAudio5' ]
  myBadSounds = [ 'wrongAudio1', 'wrongAudio2', 'wrongAudio3' ]
//var theAnswer;
createProblem();


function randomSoundGood() {
    var index = Math.floor(Math.random() * 1000) % myGoodSounds.length;
    var goodAudioID = myGoodSounds[index];
    var audioElementGood = document.getElementById(goodAudioID);
    audioElementGood.play();
}

function randomSoundBad() {
    var index = Math.floor(Math.random() * 1000) % myBadSounds.length;
    var badAudioID = myBadSounds[index];
    var audioElementBad = document.getElementById(badAudioID);
    audioElementBad.play();
}
function createProblem(){
  let problem = getNumber() + "*" + getNumber();
  myProblem.innerHTML = problem;

}

function createProblem2(){
  let first = getNumber();
  let second = getNumber();
  let third = first * second;
  let theAnswer = third / first
  let problem = first + "* ... =" + third;
  level2Answer = second;
  myProblem.innerHTML = problem;

}
function createProblem3(){
  let first = getNumber();
  let second = getNumber();
  let third = getNumber();
  let theAnswer = first + second * third;
  let problem = first + " + " + second + " * " + third;
  level3Answer = theAnswer;
  myProblem.innerHTML = problem;
}

function createProblem4(){
  let first = getNumber();
  let second = getNumber();
  let third = getNumber();
  let fourth = first + second * third;
  let problem = first + " + " + second + " * ...=" + fourth
  level4Answer = third;
  myProblem.innerHTML = problem;
}
function getNumber(){
  return Math.floor(Math.random()*10)+1
}

function wrongYouSuck(){
  myFeedback.innerHTML = "Wrong";

randomSoundBad();

}

function isItCorrect(){
  myAnswer.value = ""
  myScore.innerHTML = score;
  myFeedback.innerHTML = "Je hebt het niet fout"
  theScore ++;
  myScore.innerHTML ="score:" + theScore;
  randomSoundGood();

  if(theScore <= 10)
  {
    createProblem();
  }
  else if(theScore > 10 && theScore <= 20)
  {
    createProblem2();
  }
  else if(theScore > 20 && theScore <=30)
  {
    createProblem3();
  }
  else if(theScore > 30)
  {
    createProblem4();
  }
}
/*function checkAnswer(){
  if (button.clicked == true)
    {
  if(myAnswer = theAnswer){

    }
  }
}
*/
myAnswer.addEventListener('keydown',(evt)=>
{
  if(evt.keyCode == 13)
  {
    if(theScore <= 10)
    {
      if(eval(myProblem.innerHTML) == myAnswer.value)
      {
        isItCorrect();
      } else{wrongYouSuck();}
    }
    else if(theScore > 10 && theScore <=20)
    {
      if(level2Answer == myAnswer.value)
      {
        isItCorrect();
      } else{wrongYouSuck();}
    }
    else if(theScore > 20 && theScore <=30)
    {
      if(level3Answer == myAnswer.value)
      {
          isItCorrect();
      } else{wrongYouSuck();}
    }
    else if(theScore > 30)
    {
      if(level4Answer == myAnswer.value)
      {
        isItCorrect();
      } else{wrongYouSuck();}
    }




  }
})
