const countdown = document.getElementById('countdown');

onload = () => {
    setTimeout(function () {
        countdown.innerHTML = 2
    }, 1000); 
    setTimeout(function () {
        countdown.innerHTML = 1
    }, 2000);
    setTimeout(function () {
        countdown.innerHTML = 'START'
    }, 3000);
    setTimeout(function () {
        window.location.assign('game.html')
    }, 4000);
}


