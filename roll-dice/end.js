const winner = localStorage.getItem('winner');
const winnerTitle = document.getElementById("winnerTitle");

winnerTitle.innerText = "Pobednik je " + winner;
