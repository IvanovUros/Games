const generator = document.querySelector('.generator');
const hiddenNav = document.querySelector('.hidden-nav');
const rgbBtn = document.getElementById('rgbBtn');
const hexaBtn = document.getElementById('hexaBtn');
const codeDisplay = document.querySelector('.code-display');
const choices = Array.from(document.getElementsByClassName('choice'));
const lines = Array.from(document.getElementsByClassName('line'));
const linesSub = Array.from(document.getElementsByClassName('line-sub'));
let randomRGB;
let correctRGB;
let randomHexa;
let hiddenNavOpen = false;
let codeGiven = false;
let btnClickable = true;

function getRandomRGB() {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    randomRGB = "rgb(" + x + "," + y + "," + z + ")";
    correctRGB = "rgb(" + x + "," + y + "," + z + ")";    
    return [correctRGB, randomRGB];
};

function getRandomHexa() {
    randomHexa = Math.floor(Math.random()*16777215).toString(16);
    correctHexa = Math.floor(Math.random()*16777215).toString(16);
    return [correctHexa, randomHexa];
};
console.log(getRandomRGB());

function gameStart () {
    choices.forEach(choices => {
        choices.style.backgroundColor = '#fff';
        choices.style.borderColor = '#333';
    });
    lines.forEach(lines => {
        lines.style.backgroundColor = '#333';
    });
    linesSub.forEach(linesSub => {
        linesSub.style.backgroundColor = '#333';
    });
}

generator.addEventListener('click', () => {
    if (!hiddenNavOpen) {
        hiddenNav.classList.add('open');
        hiddenNavOpen = true;
    } else {
        hiddenNav.classList.remove('open');
        hiddenNavOpen = false;
    };
});

rgbBtn.addEventListener('click', () => {
    if (btnClickable) {
      getRandomRGB();
      codeDisplay.innerText = randomRGB;
      codeDisplay.style.backgroundColor = randomRGB;
      codeGiven = true;
    };
});

hexaBtn.addEventListener('click', () => {
    if (btnClickable) {
      getRandomHexa();
      codeDisplay.innerText = '#' + randomHexa;
      codeDisplay.style.backgroundColor = '#' + randomHexa;
      codeGiven = true;
    };
});

codeDisplay.addEventListener('click', () => {
    if (codeGiven) {
        gameStart();
        btnClickable = false;
    };
});




  


