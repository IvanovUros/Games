const generator = document.querySelector('.generator');
const hiddenNav = document.querySelector('.hidden-nav');
const rgbBtn = document.getElementById('rgbBtn');
const hexaBtn = document.getElementById('hexaBtn');
const codeDisplay = document.querySelector('.code-display');
const choices = Array.from(document.getElementsByClassName('choice'));
const lines = Array.from(document.getElementsByClassName('line'));
const linesSub = Array.from(document.getElementsByClassName('line-sub'));
const choiceTopLeft = document.querySelector('.choice-topleft');
const choiceTopMid = document.querySelector('.choice-topmid');
const choiceTopRight = document.querySelector('.choice-topright');
const choiceBtmLeft = document.querySelector('.choice-btmleft');
const choiceBtmMid = document.querySelector('.choice-btmmid');
const choiceBtmRight = document.querySelector('.choice-btmright');
const username = document.getElementById('username');
const submit = document.getElementById('submit');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresListName = document.getElementById('highScoresListName');
const highScoresListScore = document.getElementById('highScoresListScore');
const newGameBtn = document.querySelector('.save-score');
let randomRGB;
let correctRGB;
let randomHexa;
let correctHexa;
let generatorClickable = false;
let hiddenNavOpen = false;
let codeGiven = false;
let navBtnClickable = true;
let gameEnd = false;
let choiceClickable = true;
let givenRGB = false;
let givenHexa = false;
let codeDisplayClickable = true;
let turn = 0;

username.addEventListener('keyup', () => {
  submit.disabled = !username.value;
});

saveUsername = e => {
  localStorage.setItem('mostRecentUsername', username.value);
  e.preventDefault();
  username.disabled = true;
  submit.disabled = true;
  generatorClickable = true;
};

function saveHighScore() {
  if (gameEnd) {
    const score = {
      score: turn,
      name: username.value
    }
    highScores.unshift(score);
    // highScores.sort((a,b) => a.score - b.score);
    highScores.splice(5);
    localStorage.setItem('highScores',JSON.stringify (highScores));
    location.reload();
  };
};

highScoresListName.innerHTML = highScores.map(score => {
  return `<li class = "high-score--name"> ${score.name}</li>`;
}).join("");

highScoresListScore.innerHTML = highScores.map(score => {
  return `<li class = "high-score--score"> ${score.score}</li>`;
}).join("");

function getRandomRGB() {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    randomRGB = "rgb(" + x + "," + y + "," + z + ")";
    return randomRGB;
};

function getRandomHexa() {
    randomHexa = Math.floor(Math.random()*16777215).toString(16);
    return randomHexa;
};

function dissapear (x) {
    x.style.backgroundColor = 'transparent';
    x.style.borderColor = 'transparent';
    x.innerText = '';
};

function correctChoice(x) {
  if (choiceClickable) {
    if(givenRGB) {
        x.innerText = correctRGB;
        x.classList.add('correct');
        gameEnd = true;
        choiceClickable = false;
        codeDisplay.style.backgroundColor = correctRGB;
    };
    if(givenHexa) {
        x.innerText = '#' + correctHexa;
        x.classList.add('correct');
        gameEnd = true;
        choiceClickable = false;
        codeDisplay.style.backgroundColor = '#' + correctHexa;
    }
  };
  newGameBtn.style.display = 'block';
};

function wrongChoice(x) {
  if (choiceClickable) {
    if(givenRGB) {
        x.innerText = randomRGB;
    };
    if(givenHexa) {
        x.innerText = '#' + randomHexa;
    };
    turn++;
    setTimeout(dissapear, 1000, x);
  };
};

function gameStart () {
  correctHexa = randomHexa;
  correctRGB = randomRGB;
  choices.forEach(choices => {
    choices.style.borderColor = '#333';
  });
  integer = Math.floor(Math.random()* 6);
  if (integer == 0) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = correctRGB;
          choiceTopMid.style.backgroundColor = getRandomRGB();
          choiceTopRight.style.backgroundColor = getRandomRGB();
          choiceBtmLeft.style.backgroundColor = getRandomRGB();
          choiceBtmMid.style.backgroundColor = getRandomRGB();
          choiceBtmRight.style.backgroundColor = getRandomRGB();
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + correctHexa;
          choiceTopMid.style.backgroundColor = '#' + getRandomHexa();
          choiceTopRight.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmMid.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmRight.style.backgroundColor = '#' + getRandomHexa();
      };
      choiceTopLeft.addEventListener('click', () => {
        correctChoice(choiceTopLeft);
      });
      choiceTopMid.addEventListener('click', () => {
        wrongChoice(choiceTopMid);
      });
      choiceTopRight.addEventListener('click', () => {
        wrongChoice(choiceTopRight);
      });
      choiceBtmLeft.addEventListener('click', () => {
          wrongChoice(choiceBtmLeft);
      });
      choiceBtmMid.addEventListener('click', () => {
          wrongChoice(choiceBtmMid);
      });
      choiceBtmRight.addEventListener('click', () => {
          wrongChoice(choiceBtmRight);
      });
  };
  if (integer == 1) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = getRandomRGB();
          choiceTopMid.style.backgroundColor = correctRGB;
          choiceTopRight.style.backgroundColor = getRandomRGB();
          choiceBtmLeft.style.backgroundColor = getRandomRGB();
          choiceBtmMid.style.backgroundColor = getRandomRGB();
          choiceBtmRight.style.backgroundColor = getRandomRGB();
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceTopMid.style.backgroundColor = '#' + correctHexa;
          choiceTopRight.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmMid.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmRight.style.backgroundColor = '#' + getRandomHexa();
      };
      choiceTopLeft.addEventListener('click', () => {
        wrongChoice(choiceTopLeft);
      });
      choiceTopMid.addEventListener('click', () => {
        correctChoice(choiceTopMid);
      });
      choiceTopRight.addEventListener('click', () => {
        wrongChoice(choiceTopRight);
      });
      choiceBtmLeft.addEventListener('click', () => {
        wrongChoice(choiceBtmLeft);
      });
      choiceBtmMid.addEventListener('click', () => {
        wrongChoice(choiceBtmMid);
      });
      choiceBtmRight.addEventListener('click', () => {
        wrongChoice(choiceBtmRight);
      });
  };
  if (integer == 2) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = getRandomRGB();
          choiceTopMid.style.backgroundColor = getRandomRGB();
          choiceTopRight.style.backgroundColor = correctRGB;
          choiceBtmLeft.style.backgroundColor = getRandomRGB();
          choiceBtmMid.style.backgroundColor = getRandomRGB();
          choiceBtmRight.style.backgroundColor = getRandomRGB();
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceTopMid.style.backgroundColor = '#' + getRandomHexa();
          choiceTopRight.style.backgroundColor = '#' + correctHexa;
          choiceBtmLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmMid.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmRight.style.backgroundColor = '#' + getRandomHexa();
      };
      choiceTopLeft.addEventListener('click', () => {
          wrongChoice(choiceTopLeft);
       });
       choiceTopMid.addEventListener('click', () => {
          wrongChoice(choiceTopMid);
       });
       choiceTopRight.addEventListener('click', () => {
         correctChoice(choiceTopRight);
       });
       choiceBtmLeft.addEventListener('click', () => {
         wrongChoice(choiceBtmLeft);
       });
       choiceBtmMid.addEventListener('click', () => {
         wrongChoice(choiceBtmMid);
       });
       choiceBtmRight.addEventListener('click', () => {
         wrongChoice(choiceBtmRight);
       });
  };
  if (integer == 3) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = getRandomRGB();
          choiceTopMid.style.backgroundColor = getRandomRGB();
          choiceTopRight.style.backgroundColor = getRandomRGB();
          choiceBtmLeft.style.backgroundColor = correctRGB;
          choiceBtmMid.style.backgroundColor = getRandomRGB();
          choiceBtmRight.style.backgroundColor = getRandomRGB();
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceTopMid.style.backgroundColor = '#' + getRandomHexa();
          choiceTopRight.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmLeft.style.backgroundColor = '#' + correctHexa;
          choiceBtmMid.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmRight.style.backgroundColor = '#' + getRandomHexa();
      };
      choiceTopLeft.addEventListener('click', () => {
          wrongChoice(choiceTopLeft);
       });
       choiceTopMid.addEventListener('click', () => {
          wrongChoice(choiceTopMid);
       });
       choiceTopRight.addEventListener('click', () => {
         wrongChoice(choiceTopRight);
       });
       choiceBtmLeft.addEventListener('click', () => {
         correctChoice(choiceBtmLeft);
       });
       choiceBtmMid.addEventListener('click', () => {
         wrongChoice(choiceBtmMid);
       });
       choiceBtmRight.addEventListener('click', () => {
         wrongChoice(choiceBtmRight);
       });
  };
  if (integer == 4) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = getRandomRGB();
          choiceTopMid.style.backgroundColor = getRandomRGB();
          choiceTopRight.style.backgroundColor = getRandomRGB();
          choiceBtmLeft.style.backgroundColor = getRandomRGB();
          choiceBtmMid.style.backgroundColor = correctRGB;
          choiceBtmRight.style.backgroundColor = getRandomRGB();
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceTopMid.style.backgroundColor = '#' + getRandomHexa();
          choiceTopRight.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmMid.style.backgroundColor = '#' + correctHexa;
          choiceBtmRight.style.backgroundColor = '#' + getRandomHexa();
      };
      choiceTopLeft.addEventListener('click', () => {
          wrongChoice(choiceTopLeft);
       });
       choiceTopMid.addEventListener('click', () => {
          wrongChoice(choiceTopMid);
       });
       choiceTopRight.addEventListener('click', () => {
         wrongChoice(choiceTopRight);
       });
       choiceBtmLeft.addEventListener('click', () => {
         wrongChoice(choiceBtmLeft);
       });
       choiceBtmMid.addEventListener('click', () => {
         correctChoice(choiceBtmMid);
       });
       choiceBtmRight.addEventListener('click', () => {
         wrongChoice(choiceBtmRight);
       });
  };
  if (integer == 5) {
      if (givenRGB) {
          choiceTopLeft.style.backgroundColor = getRandomRGB();
          choiceTopMid.style.backgroundColor = getRandomRGB();
          choiceTopRight.style.backgroundColor = getRandomRGB();
          choiceBtmLeft.style.backgroundColor = getRandomRGB();
          choiceBtmMid.style.backgroundColor = getRandomRGB();
          choiceBtmRight.style.backgroundColor = correctRGB;
      };
      if(givenHexa) {
          choiceTopLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceTopMid.style.backgroundColor = '#' + getRandomHexa();
          choiceTopRight.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmLeft.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmMid.style.backgroundColor = '#' + getRandomHexa();
          choiceBtmRight.style.backgroundColor = '#' + correctHexa;
      };
      choiceTopLeft.addEventListener('click', () => {
          wrongChoice(choiceTopLeft);
       });
       choiceTopMid.addEventListener('click', () => {
          wrongChoice(choiceTopMid);
       });
       choiceTopRight.addEventListener('click', () => {
         wrongChoice(choiceTopRight);
       });
       choiceBtmLeft.addEventListener('click', () => {
         wrongChoice(choiceBtmLeft);
       });
       choiceBtmMid.addEventListener('click', () => {
         wrongChoice(choiceBtmMid);
       });
       choiceBtmRight.addEventListener('click', () => {
         correctChoice(choiceBtmRight);
       });
  };
};

generator.addEventListener('click', () => {
    if(generatorClickable) {
      if (!hiddenNavOpen) {
        hiddenNav.classList.add('open');
        hiddenNavOpen = true;
      } else {
        hiddenNav.classList.remove('open');
        hiddenNavOpen = false;
      };
    }
});

rgbBtn.addEventListener('click', () => {
    if (navBtnClickable) {
      getRandomRGB();
      codeDisplay.innerText = randomRGB;
      codeGiven = true;
      givenRGB = true;
      givenHexa = false;
    };
});

hexaBtn.addEventListener('click', () => {
    if (navBtnClickable) {
      getRandomHexa();
      codeDisplay.innerText = '#' + randomHexa;
      codeGiven = true;
      givenHexa = true;
      givenRGB = false;
    };
});

codeDisplay.addEventListener('click', () => {
    if (codeGiven && codeDisplayClickable) {
        gameStart();
        navBtnClickable = false;
        codeDisplayClickable = false;
    };
});
