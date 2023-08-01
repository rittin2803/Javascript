
let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses: 0,   //Setting with default operator
        ties: 0
    };
const randomNumber = Math.random(); 
let Result = '';

/*
if(!score) { //checking falsy and setting default
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
} */

console.log(localStorage.getItem('score'));
//Using Function to replace the repitition of code and make updation easier.
function playGame(playerMove){
        const compMove= pickCompMove();

        if(playerMove === 'scissors'){
            if(compMove === 'Rock') {
            Result = 'Lose';
        } else if (compMove === 'Paper') {
            Result = 'Win';
        } else {
            Result = 'Tie';
        }
    } else if(playerMove === 'Rock') {
        if(compMove === 'Rock') {
            Result = 'Tie';
        } else if (compMove === 'Paper') {
            Result = 'Lose';
        } else {
            Result = 'Win';
        }
    } else if (playerMove === 'Paper'){
        if(compMove === 'Rock') {
            Result = 'Win';
        } else if (compMove === 'Paper') {
            Result = 'Tie';
        } else {
            Result = 'Lose';
        }
    } else {
        return;
    }

    if(Result === 'Win'){
        score.wins += 1;
    } else if(Result === 'Lose'){
        score.loses += 1;
    } else if (Result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    //Setting Item - variable, localstorage only supprts strings

    scoreDisplay();
    document.querySelector('.js-result').innerHTML = `You ${Result}`;

    document.querySelector('.js-movePick').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon">
Computer`;

    
}

function pickCompMove(){
let compMove = '';
const randomNumber = Math.random(); 
if(randomNumber >= 0 && randomNumber < 1/3) {
        compMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        compMove = 'Paper';
    } else {
        compMove = 'Scissors';
    } 
    return compMove; //ends the function & gets value out of function
    //Global and Returning (*Best Practice) Variable
}

function scoreDisplay(){
let js_score = document.querySelector('.js-score');
js_score.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`; 
};
        