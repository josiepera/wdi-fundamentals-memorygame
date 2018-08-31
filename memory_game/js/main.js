/*var cardOne = "Queen";
var cardTwo = "King";
var cardThree = "King";
var cardFour = "Queen";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);*/
var cards = ["queen", "queen", "king", "King"];
cards;
var cardsInPlay = []

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king");

if (cardsInPlay.length === 2) {
  //Condition will be true
} else if (cardsInPlay[0] === cardsInPlay[2]) {
  result = alert("you found a match!");
} else {
  result = alert("Sorry, try again");
}
