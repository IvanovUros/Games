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
    // console.log(Object.keys(data.symbols));
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
console.log(ratesArray);
console.log(symbolsArray);

let leftListOpen = false;
let rightListOpen = false;

leftValuteBtn.addEventListener('click', () => {
    if (!leftListOpen) {
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
        rightValuteList.style.height = '30rem'
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



