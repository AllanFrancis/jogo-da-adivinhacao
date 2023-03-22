
const btnTry = document.getElementById('btnTry');
const btnTryAgain = document.getElementById('btnTryAgain');
const inputTry = document.getElementById('inputTry');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const result = document.getElementById('result');
const numberTries = document.getElementById('numberTry');
const numberWin = document.getElementById('numberWin');

let numberSorted = Math.floor(Math.random() * 10);
let numberTry = 1;
let listNumberTries = [];


btnTry.addEventListener('click',(event)=>{
    event.preventDefault();
    if (inputTry.value == numberSorted) { 
        win(numberTry);
        Restart();
    } else {
        addInList();
        btnTry.innerHTML = numberTry == 1?'Primeira tentativa':`Tentativa nº(${numberTry})`;
        inputTry.focus();
        inputTry.select();
    }
})

function addInList() {
    elvalue = `<div>${inputTry.value}</div>`
    let exist = existValue(listNumberTries,elvalue);
    if (exist == false) {
        numberTry += 1;
        listNumberTries.push(elvalue);
    }
    numberTries.innerHTML = listNumberTries.join(" ");
}

function existValue(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return true;
        }
    }
    return false
}


btnTryAgain.addEventListener('click',(event)=>{
    event.preventDefault();
    playAgain();
})

function win(tries) { 
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
    result.innerText = `Acertou na ${tries}º tentativa`;
    numberWin.innerText = numberSorted;
}

function playAgain() {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');   
    Restart();
}

function Restart() { 
    numberTry = 1; 
    listNumberTries = [];
    numberTries.innerHTML = listNumberTries.join(" ");
    numberSorted = Math.floor(Math.random() * 10);    
}