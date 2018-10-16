// all variables

var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var update = document.querySelector("#update");
var challenger1Name = document.querySelector("#challenger1");
var challenger1Guess = document.querySelector("#guess1");
var challenger2Name = document.querySelector("#challenger2");
var challenger2Guess = document.querySelector("#guess2");
var submitGuess = document.querySelector("#submit");
var resetGame = document.querySelector("#reset");
var clearGame = document.querySelector("#clear");
var maxRange = document.querySelector("#visible-max");
var minRange = document.querySelector("#visible-min");
var response1 = document.querySelector("#response1");
var response2 = document.querySelector("#response2");


// all functions

function update() {
  submitGuess.disable = false;
  min = parseInt(minRange.value) || 1;
  max = parseInt(maxRange.value) || 100;
  currentMinRange.innerText = min;
  currentMaxRange.innerText = max;
  numberGenerated = newNumber();
}

function newNumber () {
  return Math.floor(Math.random() *(max - min +1)) + min;
}

function clear () {
  return challenger1Guess = "";
  return challenger2Guess = "";
}


function difficulty (n) {
  max += n; 
  min -= n;
  currentMinRange.innerText = min;
  currentMaxRange.innerText = max; 
}

function submit() {
  clearGame.disabled = false;
  resetGame.disabled = false;
  player1();
  player2();
  }

function player1 (){
  if (numberGenerated > challenger1Guess){
    response1.innerText = "Sorry, that was too low";
  }else if (numberGenerated < challenger1Guess){
    response1.innerText = "Sorry, that was too high";
  }else {
    winnerBox(challenger1Name);
  }
}

function player2 (){
  if (numberGenerated > challenger2Guess){
    response2.innerText = "Sorry, that was too low";
  }else if (numberGenerated < challenger2Guess){
    response2.innerText = "Sorry, that was too high";
  }else {
    winnerBox(challenger2Name);
  }
}

// Event Listeners

update.addEventListener('click', update);
clearGame.addEventListener('click', clear);
submitGuess.addEventListener('click', submit);



​
​
 