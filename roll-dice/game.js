const firstPlayer = localStorage.getItem('firstPlayerUsername');
const secondPlayer = localStorage.getItem('secondPlayerUsername');
const firstPlayerUsername = document.getElementById('usernameTextFirst');
const secondPlayerUsername = document.getElementById('usernameTextSecond');
const totalFirst = document.getElementById('totalFirst');
const totalSecond = document.getElementById('totalSecond');
const currentFirst = document.getElementById('currentFirst');
const currentSecond = document.getElementById('currentSecond');
const rollBtn = document.getElementById('roll');
const stopBtn = document.getElementById('stop');
const diceF = document.getElementById('diceFirst');
const diceS = document.getElementById('diceSecond');
const turnIndicatorFirst = document.getElementById('turnIndicatorFirst');
const turnIndicatorSecond = document.getElementById('turnIndicatorSecond');
let indicator;
let secondPlayerTurn = false;
let totalValueFirst = 0;
let totalValueSecond = 0;
let currentValueFirst = 0;
let currentValueSecond = 0;

firstPlayerUsername.innerText = firstPlayer;
secondPlayerUsername.innerText = secondPlayer;
totalFirst.innerText = 'Total : ' + totalValueFirst;
totalSecond.innerText = 'Total : ' + totalValueSecond;
currentFirst.innerText = 'Current : ' + currentValueFirst;
currentSecond.innerText = 'Current : ' + currentValueSecond;

function getRandomInt() {
     indicator = Math.floor(Math.random() * 6);
     return indicator;
};

function gameEnding() {
    if (totalValueFirst >= 50) {
        localStorage.setItem('winner', firstPlayer);
        window.location.assign('end.html');
    };
    if (totalValueSecond >= 50) {
        localStorage.setItem('winner', secondPlayer);
        window.location.assign('end.html');
    };
};

rollBtn.addEventListener('click', () => {
    getRandomInt();
    if (!secondPlayerTurn) {
        turnIndicatorFirst.classList.remove('false');
        turnIndicatorFirst.classList.add('true');
        turnIndicatorSecond.classList.remove('true');
        turnIndicatorSecond.classList.add('false');
        if (indicator == 0) {
            diceFirst.classList.add('one');
            diceFirst.classList.remove('two');
            diceFirst.classList.remove('three');
            diceFirst.classList.remove('four');
            diceFirst.classList.remove('five');
            diceFirst.classList.remove('six');
            currentValueFirst = 0;
            rollBtn.disabled = true;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
            setTimeout(function () {
                secondPlayerTurn=true;
                diceFirst.classList.remove('one');
                rollBtn.disabled = false;
                turnIndicatorSecond.classList.remove('false');
                turnIndicatorSecond.classList.add('true');
                turnIndicatorFirst.classList.remove('true');
                turnIndicatorFirst.classList.add('false');
            }, 1500);
        };
        if (indicator == 1) {
            diceFirst.classList.add('two');
            diceFirst.classList.remove('one');
            diceFirst.classList.remove('three');
            diceFirst.classList.remove('four');
            diceFirst.classList.remove('five');
            diceFirst.classList.remove('six');
            currentValueFirst = currentValueFirst + 2;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
        };
        if (indicator == 2) {
            diceFirst.classList.add('three');
            diceFirst.classList.remove('one');
            diceFirst.classList.remove('two');
            diceFirst.classList.remove('four');
            diceFirst.classList.remove('five');
            diceFirst.classList.remove('six');
            currentValueFirst = currentValueFirst + 3;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
        };
        if (indicator == 3) {
            diceFirst.classList.add('four');
            diceFirst.classList.remove('one');
            diceFirst.classList.remove('two');
            diceFirst.classList.remove('three');
            diceFirst.classList.remove('five');
            diceFirst.classList.remove('six');
            currentValueFirst = currentValueFirst + 4;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
        };
        if (indicator == 4) {
            diceFirst.classList.add('five');
            diceFirst.classList.remove('one');
            diceFirst.classList.remove('two');
            diceFirst.classList.remove('three');
            diceFirst.classList.remove('four');
            diceFirst.classList.remove('six');
            currentValueFirst = currentValueFirst + 5;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
        };
        if (indicator == 5) {
            diceFirst.classList.add('six');
            diceFirst.classList.remove('one');
            diceFirst.classList.remove('two');
            diceFirst.classList.remove('three');
            diceFirst.classList.remove('four');
            diceFirst.classList.remove('five');
            currentValueFirst = currentValueFirst + 6;
            currentFirst.innerText = 'Current : ' + currentValueFirst;
        };
    } else {
        turnIndicatorSecond.classList.remove('false');
        turnIndicatorSecond.classList.add('true');
        turnIndicatorFirst.classList.remove('true');
        turnIndicatorFirst.classList.add('false');
        if (indicator == 0) {
            diceSecond.classList.add('one');
            diceSecond.classList.remove('two');
            diceSecond.classList.remove('three');
            diceSecond.classList.remove('four');
            diceSecond.classList.remove('five');
            diceSecond.classList.remove('six');
            currentValueSecond = 0;
            rollBtn.disabled = true;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
            setTimeout(function () {
                secondPlayerTurn=false;
                diceSecond.classList.remove('one');
                rollBtn.disabled = false;
                turnIndicatorFirst.classList.remove('false');
                turnIndicatorFirst.classList.add('true');
                turnIndicatorSecond.classList.remove('true');
                turnIndicatorSecond.classList.add('false');
            }, 1500);
        };
        if (indicator == 1) {
            diceSecond.classList.add('two');
            diceSecond.classList.remove('one');
            diceSecond.classList.remove('three');
            diceSecond.classList.remove('four');
            diceSecond.classList.remove('five');
            diceSecond.classList.remove('six');
            currentValueSecond = currentValueSecond + 2;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 2) {
            diceSecond.classList.add('three');
            diceSecond.classList.remove('one');
            diceSecond.classList.remove('two');
            diceSecond.classList.remove('four');
            diceSecond.classList.remove('five');
            diceSecond.classList.remove('six');
            currentValueSecond = currentValueSecond + 3;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 3) {
            diceSecond.classList.add('four');
            diceSecond.classList.remove('one');
            diceSecond.classList.remove('two');
            diceSecond.classList.remove('three');
            diceSecond.classList.remove('five');
            diceSecond.classList.remove('six');
            currentValueSecond = currentValueSecond + 4;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 4) {
            diceSecond.classList.add('five');
            diceSecond.classList.remove('one');
            diceSecond.classList.remove('two');
            diceSecond.classList.remove('three');
            diceSecond.classList.remove('four');
            diceSecond.classList.remove('six');
            currentValueSecond = currentValueSecond + 5;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 5) {
            diceSecond.classList.add('six');
            diceSecond.classList.remove('one');
            diceSecond.classList.remove('two');
            diceSecond.classList.remove('three');
            diceSecond.classList.remove('four');
            diceSecond.classList.remove('five');
            currentValueSecond = currentValueSecond + 6;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
        };
    }
});

stopBtn.addEventListener('click', () => {
    if (!secondPlayerTurn) {
        totalValueFirst = totalValueFirst + currentValueFirst;
        totalFirst.innerText = 'Total : ' + totalValueFirst;
        currentValueFirst = 0;
        currentFirst.innerText = 'Current : ' + currentValueFirst;
        secondPlayerTurn = true;
        diceFirst.classList.remove('one');
        diceFirst.classList.remove('two');
        diceFirst.classList.remove('three');
        diceFirst.classList.remove('four');
        diceFirst.classList.remove('five');
        diceFirst.classList.remove('six');
        turnIndicatorSecond.classList.remove('false');
        turnIndicatorSecond.classList.add('true');
        turnIndicatorFirst.classList.remove('true');
        turnIndicatorFirst.classList.add('false');
        gameEnding();
    } else {
        totalValueSecond = totalValueSecond + currentValueSecond;
        totalSecond.innerText = 'Total : ' + totalValueSecond;
        currentValueSecond = 0;
        currentSecond.innerText = 'Current : ' + currentValueSecond;
        secondPlayerTurn = false;
        diceSecond.classList.remove('one');
        diceSecond.classList.remove('two');
        diceSecond.classList.remove('three');
        diceSecond.classList.remove('four');
        diceSecond.classList.remove('five');
        diceSecond.classList.remove('six');
        turnIndicatorFirst.classList.remove('false');
        turnIndicatorFirst.classList.add('true');
        turnIndicatorSecond.classList.remove('true');
        turnIndicatorSecond.classList.add('false');
        gameEnding();
    }
});