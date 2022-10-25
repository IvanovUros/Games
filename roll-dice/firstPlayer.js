const usernameF = document.getElementById('usernameF');
const submitBtnF = document.getElementById('submitF');

usernameF.addEventListener('keyup', () => {
    submitBtnF.disabled = !usernameF.value;
});

nextPage = e => {
    localStorage.setItem('firstPlayerUsername', usernameF.value);
    e.preventDefault();
    window.location.assign('secondPlayer.html');
}



