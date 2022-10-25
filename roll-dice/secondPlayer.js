const usernameS = document.getElementById('usernameS');
const submitBtnS = document.getElementById('submitS');

usernameS.addEventListener('keyup', () => {
    submitBtnS.disabled = !usernameS.value;
});

nextPage = e => {
    localStorage.setItem('secondPlayerUsername', usernameS.value);
    e.preventDefault();
    window.location.assign('countdown.html');
}