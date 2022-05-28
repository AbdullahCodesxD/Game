'use strict';

// SELECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const current = document.querySelector('.current')
const current0El = document.getElementById('current--0')

// BTNS
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');


// INTIAL CONDITIONS
let totalScore = '';
let scores = '';
let activePlayer = '';
let playing = '';

const random = function () {
    return Math.trunc(Math.random(1, 6) * 6 + 1);
}

const ez = function () {
    totalScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = totalScore;
    current0El.textContent = totalScore;
}
const declaration = function () {
    if (activePlayer != 0) {
        activePlayer--;

    } else {
        // PLAYER ON THE RIGHT SIDE 
        activePlayer++;;
    }
}
const newG = function () {
    totalScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;;

    score0El.textContent = 0;
    score1El.textContent = 0;
    dice.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.getElementById(`current--0`).textContent = totalScore;
    document.getElementById(`current--1`).textContent = totalScore;
    ;

    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

}
newG()

// ROLLING DICE
rollDice.addEventListener('click', function () {
    if (playing) {
        const score = random();
        console.log(`Rolled no was ${score}`);
        dice.classList.remove('hidden');

        dice.src = `dice-${score}.png`

        if (score !== 1) {
            totalScore += score;
            console.log(totalScore)
            document.getElementById(`current--${activePlayer}`).textContent = totalScore;

        } else {
            ez()
            declaration()
        };
    } else {
        console.log(`f u`)
    }
});



// HOLDING DICE
hold.addEventListener('click', function () {
    scores[activePlayer] += totalScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        dice.classList.add('hidden');
        console.log(playing)
    } else {
        ez();
        declaration();


    }
})

newGame.addEventListener('click', newG)