/*var cardOne = "Queen";
var cardTwo = "King";
var cardThree = "King";
var cardFour = "Queen";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);*/
var cards = ["queen", "queen", "king", "King"];
cards;
var cardsInPlay = []
cardsInPlay.push(cards[0]);

var checkForMatch = function (){
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

};
var flipCard = function (cardId) {
var cardOne;
var cardTwo;
checkForMatch();
  console.log("user flipped " + cards[0]);
};

flipCard(0);
flipCard(2);


/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
*/

if (cardsInPlay.length === 2) {
  //Condition will be true
} else if (cardsInPlay[0] === cardsInPlay[1]) {
  result = alert("you found a match!");
} else {
  result = alert("Sorry, try again");
};
