let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let calories = 250;
let vegetableOne = "carrot";
let vegetableTwo = "potato";

console.log(fruits);
console.log(calories);
console.log(vegetableOne);
console.log(vegetableTwo);

console.log(fruits[1], fruits[2]); 


let playerScore = 0;

function addOneToPlayerScore() {
  playerScore += 1; 
  console.log('Player Score: ' + playerScore);
  
}

function checkPlayerScore() {
  if (playerScore % 2 === 0) {
    console.log("The score is even");
  } else {
    console.log("The score is odd");
  }
}

addOneToPlayerScore();
checkPlayerScore();
addOneToPlayerScore();
checkPlayerScore();
addOneToPlayerScore();
checkPlayerScore();