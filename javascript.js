//all the variables
var randomNum = Math.floor(Math.random() * 100);
var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var updateButton = document.querySelector("#update");
var clearButton = document.querySelector("#clear");
var resetButton = document.querySelector("#reset");
var response = document.querySelector("#response");
var submitButton = document.querySelector('#submit');
var numGuess = document.querySelector('#guess');
var numShow = document.querySelector('#number-guessed');
var currentMaxRange = 110;
var currentMinRange = 1;
​
//change html look
document.querySelector("#visible-max").innerText = currentMaxRange;
document.querySelector("#visible-min").innerText = currentMinRange;
​
​
//all the function 
  function guessTooLow() {
 numGuess.innerText = numGuess;
 response.innerText = 'Sorry, that was too low';
}
​
function guessTooHigh() {
 numGuess.innerText = numGuess;
 response.innerText = "Sorry, that was too high";
}
​
function guessRight() {
 numGuess.innerText = numGuess;
 response.innerText = "BOOM";
}
​
//the event listener
submitButton.addEventListener('click', function () {
 numberDisplay = numGuess.value;
 numShow.innerText=numberDisplay;
   if ( numberDisplay > randomNum ) {
  guessTooHigh();
 }else if ( numberDisplay < randomNum ) {
  guessTooLow()
 }else {
  guessRight()
 };
});
​
​
( minmax === null && minmax > maxmax)
​
​
​
 