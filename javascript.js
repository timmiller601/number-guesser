var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var updatebutton = document.querySelector("#update");
var challenger1Name = document.querySelector("#challenger1");
var challenger1Guess = document.querySelector("#guess1");
var challenger2Name = document.querySelector("#challenger2");
var challenger2Guess = document.querySelector("#guess2");
var submitGuess = document.querySelector("#submit");
var resetGame = document.querySelector("#reset");
var clearGame = document.querySelector("#clear");
var visibleMaxRange = document.querySelector("#visible-max");
var visibleMinRange = document.querySelector("#visible-min");
var response1 = document.querySelector("#response1");
var response2 = document.querySelector("#response2");
var cardHolder = document.querySelector("#right");
var numberGuessPlayerOne = document.querySelector("#number-guess1");
var numberGuessPlayerTwo = document.querySelector("#number-guess2");
var playerOneDisplay = document.querySelector("#name-display-one");
var palyerTwoDisplay = document.querySelector("#name-display-two");
var guessNumber = 0;

function update() {
 submitGuess.disabled = false;
 min = parseInt(minRange.value) || 1;
 max = parseInt(maxRange.value) || 100;
 visibleMinRange.innerText = min;
 visibleMaxRange.innerText = max;
 numberGenerated = newNumber();
}

function newNumber() {
 return Math.floor(Math.random() *(max - min + 1)) + min;
}

function clear() {
  challenger1Guess.value = "";
  challenger2Guess.value = "";
}

function reset() {
  clear();
  challenger1Name.value = "";
  challenger2Name.value = "";
  minRange.value = "";
  maxRange.value = "";
  min.value = 1;
  max.value = 100;
  visibleMaxRange.innerText = 100;
  visibleMinRange.innerText = 1;
}

 function guessCounter() {
  guessNumber++;
}

function difficulty() {
 max += 10;
 min -= 10;
 visibleMinRange.innerText = min;
 visibleMaxRange.innerText = max;
}

function submit() {
  if (challenger1Name.value === "" || challenger2Name.value === "") {
    challenger1Name.setAttribute("placeholder", "enter valid name");
    challenger2Name.setAttribute("placeholder", "enter valid name");
  }else {
  guessCounter();
 clearGame.disabled = false;
 resetGame.disabled = false;
 player1(parseInt(challenger1Guess.value), challenger1Name);
 player2(parseInt(challenger2Guess.value), challenger2Name);
  }
 }

function player1(playOne, playName) {
  playerOneDisplay.innerText = playName.value;
 if (numberGenerated > playOne) {
   response1.innerText = "Sorry, that was too low";
   numberGuessPlayerOne.innerText = playOne;
 }else if (numberGenerated < playOne){
   response1.innerText = "Sorry, that was too high";
   numberGuessPlayerOne.innerText = playOne;
 }else {
  numberGenerated = newNumber();
   difficulty();
   winnerBox(challenger2Name ,challenger1Name, guessNumber);
   response1.innerText = "Boom";
   numberGuessPlayerOne.innerText = playOne;
   guessNumber = 0;
 }
}

function player2(playTwo, playName) {
  palyerTwoDisplay.innerText = playName.value;
 if (numberGenerated > playTwo){
   response2.innerText = "Sorry, that was too low";
   numberGuessPlayerTwo.innerText = playTwo;
 }else if (numberGenerated < playTwo){
   response2.innerText = "Sorry, that was too high";
   numberGuessPlayerTwo.innerText = playTwo;
 }else {
  numberGenerated = newNumber();
   difficulty();
   winnerBox(challenger1Name, challenger2Name, guessNumber);
   response2.innerText = "Boom";
   numberGuessPlayerTwo.innerText = playTwo;
   guessNumber = 0;
 }
}

var deleteButton = document.querySelector("#del-button")

function winnerBox (player, winner) {
  var buttonDelete = document.createElement("button")
  buttonDelete.setAttribute("id", "del-button")
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main-div");
  var topDiv = document.createElement("div");
  topDiv.setAttribute("id", "top-div");
  var middleDiv = document.createElement("div");
  middleDiv.setAttribute("id", "middle-div");
  var bottomDiv = document.createElement("div");
  bottomDiv.setAttribute("id", "bottom-div");
  var h4text = document.createElement("h4");
  var h1text = document.createElement("h1");
  var normal = document.createElement("pre");
  var topDivtext = document.createTextNode(player.value + " vs " + winner.value)
  var middleText = document.createTextNode(winner.value + " Winner");
  var bottomText = document.createTextNode(guessNumber + " guesses");
  var xText = document.createTextNode("x")
  mainDiv.appendChild(topDiv);
  mainDiv.appendChild(middleDiv);
  mainDiv.appendChild(bottomDiv);
  topDiv.appendChild(h4text);
  h4text.appendChild(topDivtext);
  middleDiv.appendChild(h1text);
  h1text.appendChild(middleText);
  bottomDiv.appendChild(normal);
  normal.appendChild(bottomText);
  normal.appendChild(buttonDelete);
  buttonDelete.appendChild(xText)
  cardHolder.appendChild(mainDiv);
  function theDeleteListener () {
  this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
}
  buttonDelete.addEventListener("click", theDeleteListener);
} 

updatebutton.addEventListener('click', update);
clearGame.addEventListener('click', clear);
submitGuess.addEventListener('click', submit);
resetGame.addEventListener('click', reset);