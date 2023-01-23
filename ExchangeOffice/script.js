fetch ('https://api.exchangerate.host/latest').then((response) => {
    return response.json();
}).then(data => {
    localStorage.setItem('ratesArray',JSON.stringify(Object.values(data)));
}).catch((err) => {
    console.log(err);
})

fetch ('https://api.exchangerate.host/symbols').then((response) => {
    return response.json();
}).then(data => {
    localStorage.setItem('symbolsArray',JSON.stringify(Object.values(data.symbols)));
    symbolsArray.push(data.symbols)
}).catch((err) => {
    console.log(err);
})

const ratesArray = JSON.parse(localStorage.getItem('ratesArray'));
const symbolsArray = JSON.parse(localStorage.getItem('symbolsArray'));
const leftValuteBtn = document.querySelector('.left-valute-wrapper');
const rightValuteBtn = document.querySelector('.right-valute-wrapper');
const leftValuteList = document.querySelector('.left-valute-list');
const rightValuteList = document.querySelector('.right-valute-list');
const currentValueLeft = document.querySelector('.current-value-left');
const currentValueRight = document.querySelector('.current-value-right');
const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('input');
const output = document.querySelector('.output');
const ratesKeys = Object.keys(ratesArray[4]);
const ratesValues = Object.values(ratesArray[4]);
const allowedCharacters = /[0-9]/;

let leftListOpen = false;
let rightListOpen = false;
let leftValueSelected = false;
let rightValueSelected = false;
let inputRate;
let outputRate;

leftValuteBtn.addEventListener('click', () => {
    if (!leftListOpen) {
        leftValuteBtn.style.overflow = 'initial';
        leftValuteList.style.height = '30rem'
        leftListOpen = true;
        for (let i = 0; i < symbolsArray.length; i++) {
            leftValuteList.innerHTML += `<li class="valute">${symbolsArray[i].code}</li>`
        }
        if (rightListOpen) {
            rightValuteList.style.height = '0';
            setTimeout(function () {
                rightValuteList.innerHTML = '';
            }, 300);
            rightListOpen = false;
        }
        let valuteArray = Array.from(document.getElementsByClassName('valute'));
        for (let i = 0; i < symbolsArray.length; i++) { 
            valuteArray[i].addEventListener('click', () => {
                currentValueLeft.innerHTML = symbolsArray[i].code;
                let currentIndex = ratesKeys.indexOf(symbolsArray[i].code)
                console.log(ratesValues[currentIndex]);
                leftValueSelected = true;
                inputRate = ratesValues[currentIndex];
                if (leftValueSelected && rightValueSelected) {
                    input.disabled = false;
                }
            })
        }
    } else {
        leftValuteList.style.height = '0'
        leftListOpen = false;
        setTimeout(function () {
            leftValuteList.innerHTML = '';
        }, 300);
    }
})

rightValuteBtn.addEventListener('click', () => {
    if (!rightListOpen) {
        rightValuteBtn.style.overflow = 'initial';
        rightValuteList.style.height = '30rem';
        rightListOpen = true;
        for (let i = 0; i < symbolsArray.length; i++) {
            rightValuteList.innerHTML += `<li class="valute--right">${symbolsArray[i].code}</li>`
        }
        if (leftListOpen) {
            leftValuteList.style.height = '0';
            setTimeout(function () {
                leftValuteList.innerHTML = '';
            }, 300);
            leftListOpen = false;
        }
        let valuteRightArray = Array.from(document.getElementsByClassName('valute--right'));
        for (let i = 0; i < symbolsArray.length; i++) { 
            valuteRightArray[i].addEventListener('click', () => {
                currentValueRight.innerHTML = symbolsArray[i].code;
                let currentIndex = ratesKeys.indexOf(symbolsArray[i].code)
                console.log(ratesValues[currentIndex]);
                rightValueSelected = true;
                outputRate = ratesValues[currentIndex];
                if (leftValueSelected && rightValueSelected) {
                    input.disabled = false;
                }
            })
        }
    } else {
        rightValuteList.style.height = '0'
        rightListOpen = false;
        setTimeout(function () {
            rightValuteList.innerHTML = '';
        }, 300);
    }
})

input.addEventListener('keypress', e => {
    if (!allowedCharacters.test(e.key)) {
        convertBtn.disabled = false;
        e.preventDefault();
    }
})

convert = () => {
    let toEUR = input.value / inputRate;
    output.innerHTML = toEUR * outputRate;
}