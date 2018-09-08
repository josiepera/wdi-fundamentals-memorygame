var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
cards;

var cardsInPlay = []
cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[2].rank);

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
  console.log("user flipped " + cards[0].rank);
};
flipCard(0);
flipCard(2);

if (cardsInPlay.length === 2) {
  //Condition will be true
} else if (cardsInPlay[0] === cardsInPlay[1]) {
  result = alert("you found a match!");
} else {
  result = alert("Sorry, try again");
};

console.log("images/queen-of-hearts.png");
console.log("queen");
