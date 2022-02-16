var randomNumber1 =  Math.floor(1 + Math.random()*(7-1));
var randomDice1 = "dice"  + randomNumber1 + ".png";
var randomImage1 = "images/" + randomDice1;
document.querySelector(".img1").setAttribute("src", randomImage1);

var randomNumber2 =  Math.floor(1 + Math.random()*(7-1));
var randomDice2 = "dice"  + randomNumber2 + ".png";
var randomImage2 = "images/" + randomDice2;
document.querySelector(".img2").setAttribute("src", randomImage2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else {
    document.querySelector("h1").textContent = "Draw";
}