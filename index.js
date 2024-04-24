const randomNumber1 = Math.floor(Math.random() * 6);
const randomNumber2 = Math.floor(Math.random() * 6);

const diceImages = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png',
]


const randomImage1 = 'images/' + diceImages[randomNumber1];
const randomImage2 = 'images/' + diceImages[randomNumber2];

let player1 = document.querySelector("img.img1").src = randomImage1;
let player2 = document.querySelector("img.img2").src = randomImage2;

if(randomImage1 > randomImage2){
    document.querySelector("h1").innerText = "Player 1 wins🚩"
} 
if (randomImage2 > randomImage1){
    document.querySelector("h1").innerText = "🚩Player 2 wins"
}
if (randomImage1 === randomImage2){
    document.querySelector("h1").innerText = "Draw!"
}


