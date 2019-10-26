import Game from './Game.js';

const display = document.getElementById("display");
const answer = document.getElementById("answer");
const button = document.getElementById("submit");

const result = document.getElementById("result");

window.game = new Game();

window.addEventListener('load', () => {
    game.newPair();
    game.removeFromAON();
    display.innerText = game.showNumbers();
    answer.value = "";
    answer.focus();
})

button.addEventListener('click', () => {
    if(game.isOver()) {
        showResult();
    }
    else {
        game.checkAnswer(answer.value);
        display.innerText = game.showNumbers();
    }
})

answer.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        if(game.isOver()) {
            console.log("GAME OVER!");  
        }
        else {
            game.checkAnswer(answer.value);
            display.innerText = game.showNumbers();
        }
        answer.value = "";
        answer.focus();
    }
})

answer.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        if(result.innerHTML == "") {
            if(game.isOver()) {
                showResult();
            }
        }
    }
})

function showResult() {
    for(let i = 0; i < game.result.length; i++) {
        result.innerHTML += `<p class=${game.result[i].guessed}>${game.result[i].n1} x ${game.result[i].n2} = ${game.result[i].answer}</p>`;
    }
}