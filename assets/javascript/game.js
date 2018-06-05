var wins = 0;
var losses = 0;
var totalScore = 0;
var blueGem = 1 + Math.floor(Math.random()*12);
var greenGem = 1 + Math.floor(Math.random()*12);
var redGem = 1 + Math.floor(Math.random()*12);
var yellowGem = 1 + Math.floor(Math.random()*12);
var randomNumber = 19 + Math.floor(Math.random()*102);
document.getElementById("randomNumberPrint").innerHTML = randomNumber.toString();

function start () {
blueGem = 1 + Math.floor(Math.random()*12);
greenGem = 1 + Math.floor(Math.random()*12);
redGem = 1 + Math.floor(Math.random()*12);
yellowGem = 1 + Math.floor(Math.random()*12);
randomNumber = 19 + Math.floor(Math.random()*102);
document.getElementById("randomNumberPrint").innerHTML = randomNumber;
totalScore = 0;
}

function endGame(){
    if (totalScore == randomNumber) {
        wins += 1;
        document.getElementById("wins").innerHTML = wins;
        start();
    }
    else if (totalScore > randomNumber) {
        losses += 1;
        document.getElementById("losses").innerHTML = losses;
        start();
    }
}

function blueClick(){
    totalScore += blueGem;
    document.getElementById("scoreNumber").innerHTML = totalScore;
    endGame();
}
function greenClick(){
    totalScore += greenGem;
    document.getElementById("scoreNumber").innerHTML = totalScore;
   endGame();
}
function redClick(){
    totalScore += redGem;
    document.getElementById("scoreNumber").innerHTML = totalScore;
    endGame();
}
function yellowClick(){
    totalScore += yellowGem;
    document.getElementById("scoreNumber").innerHTML = totalScore;
    endGame();
}